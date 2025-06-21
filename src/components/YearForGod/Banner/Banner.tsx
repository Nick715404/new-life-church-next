import Image from 'next/image';
import styles from './styles.module.scss';

export const Banner = () => {
	return (
		<div className={styles.eventBanner}>
			<div className={styles.blur}></div>
			<div className='container'>
				<div className={styles.bannerWrapper}>
					<h1 className={styles.bannerTitle}>Год для Бога</h1>
				</div>
			</div>
			<Image
				src='/img/png/yfg-background.webp'
				alt='Год для Бога'
				fill
				className={styles.bannerImage}
				priority
			/>
		</div>
	);
};

{
	/* <script>
    document.addEventListener('DOMContentLoaded', function () {
        const container = document.querySelector('#animated-image-c');
        const card1 = document.querySelector('#animated-image-1');
        const card2 = document.querySelector('#animated-image-2');
        const motionMatchMedia = window.matchMedia('(prefers-reduced-motion)');
        var allow = !!(window.innerWidth >= 768);
        window.addEventListener('resize', () => allow = !!(window.innerWidth >= 768))

        function handleHover(e) {
            if (allow) {
                const { clientX, clientY, currentTarget } = e;
                const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
                const xr1 = (1.3 - (clientX / clientWidth)).toFixed(2),
                    xR2 = ((clientX / clientWidth) + 0.3).toFixed(2);
                const verticalRatio = (clientY + offsetTop) / clientHeight;
                const yR = (2.1 - verticalRatio).toFixed(1);
                card1.style.animation = 'none';
                card1.style.opacity = xr1;
                card1.style.transform = 'scale(' + yR + ')';
                card2.style.transform = 'scale(' + yR + ')';
                card2.style.animation = 'none';
                card2.style.opacity = xR2;
            }
        }

        function resetStyles(e) {
            if (allow) {
                card1.style.opacity = null;
                card2.style.opacity = null;
                card1.style.transform = null;
                card2.style.transform = null;
            }
        }

        if (!motionMatchMedia.matches) {
            if (window.ontouchstart === undefined) {
                container.addEventListener('mousemove', handleHover);
                container.addEventListener('mouseleave', resetStyles);
            }
        }
    });
</script> */
}
