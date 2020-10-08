const dispaly = document.querySelector('#display')
const inputSize = document.querySelector('#input-size')
const inputFamily = document.querySelector('#select-font')
const inputColor = document.querySelector('#input-color')
const inputBGColor = document.querySelector('#input-bg-color')
const inputText = document.querySelector('#enter-text')


inputSize.addEventListener('input', handleInput)
inputFamily.addEventListener('input', handleInput)
inputColor.addEventListener('input', handleInput)
inputBGColor.addEventListener('input', handleInput)
inputText.addEventListener('input', handleInput)

function handleInput() {

	const fontSize = inputSize.value + "px"
	const fontFamily = inputFamily.value
	const color = inputColor.value
	const backgroundColor = inputBGColor.value
	const enterText = inputText.value

	dispaly.style.fontSize = fontSize
	dispaly.style.fontFamily = fontFamily
	dispaly.style.color = color
	dispaly.style.backgroundColor = backgroundColor
	dispaly.style.textContent = enterText

	showSize.innerHTML = fontSize
	showFont.innerHTML = fontFamily
	showColor.innerHTML = color
	showBGColor.innerHTML = backgroundColor
	



}