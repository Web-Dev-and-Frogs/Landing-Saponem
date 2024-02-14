gsap.registerPlugin(ScrollTrigger)

const container = document.querySelector('.panels-row');
const panels = gsap.utils.toArray('.panel')
const text = gsap.utils.toArray('.panel__title')
const hiddenText = gsap.utils.toArray('.panel__title span')
const darkness = gsap.utils.toArray('.panel__overlay')

function manageText1() {
	const manageText1TL = gsap.timeline({
		defaults: { ease: 'none', duration: 1 }
	})
		.to(hiddenText[1], {
			opacity: 0,
			width: 0
		}, '<')
		.to(hiddenText[2], {
			opacity: 0,
			width: 0
		}, '<')

	return manageText1TL
}

function manageText2() {
	const manageText2TL = gsap.timeline({
		defaults: { ease: 'none', duration: 1 }
	})
		.to(hiddenText[1], {
			opacity: 1,
			width: 'auto',
			duration: 0.3
		}, '<')
		.to(hiddenText[0], {
			opacity: 0,
			width: 0,
			duration: 0.3,
			delay: 0.7
		}, '<')

	return manageText2TL
}

function manageText3() {
	const manageText3TL = gsap.timeline({
		defaults: { ease: 'none', duration: 1 }
	})
		.to(hiddenText[2], {
			opacity: 1,
			width: 'auto',
			duration: 0.3
		}, '<')
		.to(hiddenText[1], {
			opacity: 0,
			width: 0,
			duration: 0.3,
			delay: 0.7
		}, '<')

	return manageText3TL
}

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.panels-row',
		scrub: 1,
		pin: '.wrapper',
		start: 'center center',
		end: '+=2400'
	},
	defaults: { duration: 1, ease: 'none' }
})

tl.to(panels[0], {
		flexBasis: 1150,
	})
	.to(panels[1], {
		flexBasis: 140,
	},'<')
	.to(darkness[1], {
		opacity: 0.4
	}, '<')
	.to(panels[2], {
		flexBasis: 140,
	}, '<')
	.to(darkness[2], {
		opacity: 0.4
	}, '<')
	.add(manageText1(), '<') //Конец 1 блока
	.to(panels[0], {
		flexBasis: 140,
	}, '+=1')
	.to(darkness[0], {
		opacity: 0.4
	}, '<')
	.to(panels[1], {
		flexBasis: 1150,
	},'<')
	.to(darkness[1], {
		opacity: 0
	}, '<')
	.to(panels[2], {
		flexBasis: 140,
	}, '<')
	.add(manageText2(), '<') //Конец 2 блока
	.to(panels[0], {
		flexBasis: 140,
	}, '+=1')
	.to(panels[1], {
		flexBasis: 140,
	},'<')
	.to(darkness[1], {
		opacity: 0.4
	}, '<')
	.to(panels[2], {
		flexBasis: 1150,
	}, '<')
	.to(darkness[2], {
		opacity: 0
	}, '<')
	.add(manageText3(), '<') //Конец 3 блока
	.to(panels, {})