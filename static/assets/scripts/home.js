let inFrame

try {
  inFrame = window !== top
} catch (e) {
  inFrame = true
}

if (!inFrame && !navigator.userAgent.includes('Firefox')) {
  const popup = open('about:blank', '_blank')
  if (!popup || popup.closed) {
    alert('Please allow popups and redirects.')
  } else {
    const doc = popup.document
    const iframe = doc.createElement('iframe')
    const style = iframe.style
    const link = doc.createElement('link')

    const name = localStorage.getItem('name') || 'My Drive - Google Drive'
    const icon = localStorage.getItem('icon') || 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png'

    doc.title = name
    link.rel = 'icon'
    link.href = icon

    iframe.src = location.href
    style.position = 'fixed'
    style.top = style.bottom = style.left = style.right = 0
    style.border = style.outline = 'none'
    style.width = style.height = '100%'

    doc.head.appendChild(link)
    doc.body.appendChild(iframe)

    const pLink = localStorage.getItem(encodeURI('pLink')) || 'https://uplifteducation.schoology.com/home'
    location.replace(pLink)

    const script = doc.createElement('script')
    script.textContent = `
      window.onbeforeunload = function (event) {
        const confirmationMessage = 'Leave Site?';
        (event || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
      };
    `
    doc.head.appendChild(script)
  }
}

document.addEventListener('DOMContentLoaded', function (event) {
  if (window.localStorage.getItem('v4Particles') === 'true') {
    const scr = document.createElement('script')
    scr.src = '/assets/scripts/particles.js'
    document.body.appendChild(scr)
  }
})

let splashtext = [
  'my school uses lanschool😓',
  'This is fastest growing proxy server',
  'Made by someone ',
  'Check out my page in schoology:)',
  'Thanks for using the site',
  'Follow me on Tiktok (@zandelq)',
  'Subscribe to me plz on YouTube (@zandelq)',
  'my school is blocking everything',
  'Check out the settings page and games',
  'i am sure none of yall read this',
]

document.getElementById('splash').innerText = splashtext[Math.floor(Math.random() * splashtext.length)]
