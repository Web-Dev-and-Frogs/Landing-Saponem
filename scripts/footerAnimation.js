gsap.registerPlugin(ScrollTrigger)

function flower1() {
	const tl = gsap.timeline()
		.fromTo('#flower1 path:nth-child(1)', {
			strokeDasharray: 180,
			strokeDashoffset: 180,
			ease: 'none'
		}, {
			strokeDashoffset: 0,
			duration: 20
		})
		.addLabel('stemGrowEnd')
		.fromTo('#flower1 path:nth-child(2)', {
			scale: 0,
			transformOrigin: '60%'
		}, {
			scale: 1,
			duration: 10
		}, '<30%')
		.fromTo('#flower1 path:nth-child(3)', {
			scale: 0,
			transformOrigin: '70% 80%',
		}, {
			scale: 1,
			duration: 4,
		}, 'stemGrowEnd-=1')

	return tl
}

function flower2() {
	const tl = gsap.timeline()
		.fromTo('#flower2 path:nth-child(1)', {
			strokeDasharray: 526,
			strokeDashoffset: 526,
			ease: 'none'
		}, {
			strokeDashoffset: 0,
			duration: 30
		})
		.addLabel('stemGrowEnd')
		.fromTo('#flower2 path:nth-child(2)', {
			scale: 0,
			transformOrigin: '75%'
		}, {
			scale: 1,
			duration: 10
		}, '<14%')
		.fromTo('#flower2 path:nth-child(3)', {
			scale: 0,
			transformOrigin: '45% 80%',
		}, {
			scale: 1,
			duration: 10,
		}, 'stemGrowEnd-=20')
		.fromTo('#flower2 path:nth-child(4)', {
			scale: 0,
			transformOrigin: '70% 80%',
		}, {
			scale: 1,
			duration: 10,
		}, 'stemGrowEnd-=10')
		.fromTo('#flower2 path:nth-child(5)', {
			scale: 0,
			transformOrigin: '49% 58%',
		}, {
			scale: 1,
			duration: 10,
		}, 'stemGrowEnd-=2')

	return tl
}

function flower3() {
	const tl = gsap.timeline()
		.fromTo('#flower3 path:nth-child(1)', {
			strokeDasharray: 315,
			strokeDashoffset: 315,
			ease: 'none'
		}, {
			strokeDashoffset: 0,
			duration: 20
		})
		.addLabel('stemGrowEnd')
		.fromTo('#flower3 path:nth-child(2)', {
			scale: 0,
			transformOrigin: '55% 80%'
		}, {
			scale: 1,
			duration: 10
		}, '<24%')
		.fromTo('#flower3 path:nth-child(3)', {
			scale: 0,
			transformOrigin: '20% 80%',
		}, {
			scale: 1,
			duration: 10,
		}, 'stemGrowEnd-=8')
		.fromTo('#flower3 path:nth-child(4)', {
			scale: 0,
			transformOrigin: '51% 52%',
		}, {
			scale: 1,
			duration: 8,
		}, 'stemGrowEnd-=1')

	return tl
}

function flower4() {
	const tl = gsap.timeline()
		.fromTo('#flower4 path:nth-child(1)', {
			strokeDasharray: 389,
			strokeDashoffset: 389,
			ease: 'none'
		}, {
			strokeDashoffset: 0,
			duration: 20
		})
		.addLabel('stemGrowEnd')
		.fromTo('#flower4 path:nth-child(2)', {
			scale: 0,
			transformOrigin: '60% 50%'
		}, {
			scale: 1,
			duration: 10
		}, '<25%')
		.fromTo('#flower4 path:nth-child(3)', {
			scale: 0,
			transformOrigin: '32% 80%',
		}, {
			scale: 1,
			duration: 10,
		}, 'stemGrowEnd-=10')
		.fromTo('#flower4 path:nth-child(4)', {
			scale: 0,
			transformOrigin: '51% 62%',
		}, {
			scale: 1,
			duration: 8,
		}, 'stemGrowEnd-=1')

	return tl
}

function flower5() {
	const tl = gsap.timeline()
		.fromTo('#flower5 path:nth-child(1)', {
			strokeDasharray: 242,
			strokeDashoffset: 242,
			ease: 'none'
		}, {
			strokeDashoffset: 0,
			duration: 15
		})
		.addLabel('stemGrowEnd')
		.fromTo('#flower5 path:nth-child(2)', {
			scale: 0,
			transformOrigin: '35% 70%'
		}, {
			scale: 1,
			duration: 10
		}, '<28%')
		.fromTo('#flower5 path:nth-child(3)', {
			scale: 0,
			transformOrigin: '0 50%',
		}, {
			scale: 1,
			duration: 10,
		}, 'stemGrowEnd-=8')
		.fromTo('#flower5 path:nth-child(4)', {
			scale: 0,
			transformOrigin: '25% 60%',
		}, {
			scale: 1,
			duration: 6,
		}, 'stemGrowEnd-=2')

	return tl
}

function flower6() {
	const tl = gsap.timeline()
		.fromTo('#flower6 path:nth-child(1)', {
			strokeDasharray: 467,
			strokeDashoffset: 467,
			ease: 'none'
		}, {
			strokeDashoffset: 0,
			duration: 25
		})
		.addLabel('stemGrowEnd')
		.fromTo('#flower6 path:nth-child(2)', {
			scale: 0,
			transformOrigin: '35% 80%'
		}, {
			scale: 1,
			duration: 10
		}, '<14%')
		.fromTo('#flower6 path:nth-child(3)', {
			scale: 0,
			transformOrigin: '55% 50%',
		}, {
			scale: 1,
			duration: 10,
		}, 'stemGrowEnd-=14')
		.fromTo('#flower6 path:nth-child(4)', {
			scale: 0,
			transformOrigin: '50% 80%',
		}, {
			scale: 1,
			duration: 10,
		}, 'stemGrowEnd-=10')
		.fromTo('#flower6 path:nth-child(5)', {
			scale: 0,
			transformOrigin: '48% 60%',
		}, {
			scale: 1,
			duration: 10,
		}, 'stemGrowEnd-=2')

	return tl
}

gsap.timeline({
	scrollTrigger: {
		pinnedContainer: '.wrapper',
		trigger: '.footer-animation',
		start: '25% bottom',
		toggleActions: "play none none pause"
	}
})
	.add(flower1())
	.add(flower2(), '<')
	.add(flower3(), '<')
	.add(flower4(), '<')
	.add(flower5(), '<')
	.add(flower6(), '<')