gsap.registerPlugin(ScrollTrigger)

const flowers = gsap.utils.toArray('.footerAnimation path')

gsap.timeline({
	defaults: { ease: 'none' }
})
	.fromTo('#flower1 .head', {
		scale: 0,
		transformOrigin: 'center'
	}, {
		scale: 1,
		duration: 2,
		scrollTrigger: {
			trigger: '.footer-animation',
			start: '25% bottom',
			pinnedContainer: '.wrapper',
			toggleActions: 'play none none reset'
		}
	})