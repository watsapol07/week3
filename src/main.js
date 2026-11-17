import './style.css'
import heroImg from './assets/hero.png'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<div class="max-w-sm rounded-2xl bg-white
p-6 shadow-lg">
<h2 class="text-xl font-bold text-slate-900">
สวัสดี Tailwind
</h2>
<p class="mt-2 text-slate-600">
การ์ดใบแรกของฉัน
</p>
<button class="mt-4 rounded-lg bg-sky-700
px-4 py-2 text-white">
เริ่มเลย
</button>
</div>

setupCounter(document.querySelector('#counter'))
