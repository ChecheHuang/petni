import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function absoluteUrl(path = '') {
  if (typeof window !== 'undefined') return path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}${path}`
  return `http://localhost:${process.env.PORT ?? 3000}${path}`
}

export const wait = (time: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })

export function logClient(data: Record<string, any>): void {
  function replaceUndefined(obj: Record<string, any>): Record<string, any> {
    for (const key in obj) {
      if (
        Object.prototype.hasOwnProperty.call(obj, key) &&
        obj[key] === undefined
      ) {
        obj[key] = 'undefined'
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        replaceUndefined(obj[key])
      }
    }
    return obj
  }

  const newWindow = window.open('', '_blank')
  const processedData = replaceUndefined(data)
  const jsonData = JSON.stringify(processedData, null, 2)

  newWindow?.document.write(`
    <div style="display: flex; justify-content: flex-end; gap: 10px;">
        <button onclick="copyToClipboard()">Copy</button>
        <button onclick="window.close()">Close Window</button>
    </div>
    <div style="display: flex; justify-content: center">
        <pre>${jsonData}</pre>
    </div>
    <script>
      function copyToClipboard() {
        const textArea = document.createElement('textarea');
        const jsonDataString =${JSON.stringify(jsonData)};
        const jsonDataStringWithoutUndefined = jsonDataString.replace(/"undefined"/g, undefined);
        textArea.value ="const copy = " + jsonDataStringWithoutUndefined;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        const result = window.confirm('複製成功!');
        if (result) {
          window.close()
        }
      }
      
    </script>
  `)
}
