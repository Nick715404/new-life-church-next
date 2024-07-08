import styles from './YouTubeLink.module.scss';

import Link from 'next/link';

const YouTubeLink = () => {
  return (
    <Link href={'https://www.youtube.com/@wolruschelTV'} className={styles.youTubeLink}>
      <svg width="57" height="23" viewBox="0 0 57 23" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_123_178)">
          <path d="M7.65939 3.80459L7.66794 3.76434L7.69073 3.59472L6.63624 3.58897C5.68434 3.58322 5.39221 3.58897 5.36656 3.61341C5.35374 3.62491 5.02456 4.88559 4.43889 7.16834C4.15959 8.25797 3.92446 9.12766 3.91591 9.10178C3.90736 9.07591 3.57391 7.83247 3.17206 6.33891C2.93146 5.42572 2.68255 4.51479 2.42536 3.60622C2.41111 3.59184 1.13431 3.58609 0.0997605 3.59472C-0.0498645 3.59616 -0.13394 3.30003 1.43641 8.33703C1.65301 9.03422 1.97934 10.0218 2.15889 10.5307C2.36694 11.1172 2.51514 11.5714 2.61631 11.9495C2.79586 12.6697 2.80156 13.121 2.76309 13.6486C2.71749 14.2567 2.71179 18.5548 2.75596 18.6267C2.79016 18.6813 4.78659 18.7072 4.97611 18.6554C5.00604 18.6468 5.02599 18.618 5.04024 18.4556C5.08726 18.3162 5.09154 17.7598 5.09154 15.4512V12.5029L5.21979 12.0961C5.30386 11.8302 5.51334 11.1301 5.68719 10.5407L6.15316 8.97384C6.90699 6.49559 7.62519 4.05903 7.64513 3.91959L7.66081 3.80603L7.65939 3.80459ZM18.8399 7.38109V7.53491H18.8157L18.8029 11.7798L18.7901 15.8954L18.4637 16.2303C18.0975 16.6055 17.8054 16.7493 17.5403 16.6817C17.2511 16.6084 17.2596 16.722 17.2354 11.8575L17.2126 7.37966H15.1121V7.53347H15.0879V12.3922C15.0879 17.5974 15.0879 17.5945 15.3501 18.1163C15.5582 18.5332 15.8631 18.7359 16.3832 18.8049C17.0687 18.8969 17.8082 18.5835 18.4937 17.9108L18.7915 17.619V18.1235C18.7915 18.5591 18.8043 18.631 18.8827 18.6525C19.0109 18.6885 20.6012 18.6913 20.7722 18.6554L20.9147 18.6252V18.4757L20.939 18.4714V7.35091L18.8414 7.37966L18.8399 7.38109ZM13.5133 9.57472C13.3138 8.71366 12.9419 8.13434 12.3277 7.73472C11.3644 7.10653 10.2629 7.03897 9.24256 7.54784C8.49871 7.91872 8.01849 8.53397 7.77196 9.43672C7.74031 9.54528 7.7179 9.65637 7.70499 9.76878C7.64229 10.0879 7.63516 10.5623 7.61806 12.7775C7.59241 16.1901 7.63231 16.5955 8.05554 17.3703C8.47163 18.1307 9.33376 18.6885 10.2728 18.8035C10.555 18.838 11.1278 18.7848 11.4584 18.6913C12.2066 18.4815 12.9248 17.8849 13.2425 17.2078C13.3824 16.9367 13.4736 16.6428 13.5119 16.3396C13.6045 15.8322 13.6116 15.0099 13.6116 12.9169C13.6116 10.2475 13.6031 9.95566 13.5147 9.57328L13.5133 9.57472ZM11.1179 16.5308C10.9013 16.6736 10.6375 16.7242 10.384 16.6717C10.1916 16.63 9.93084 16.3252 9.85104 16.0478C9.75129 15.7013 9.74416 10.8814 9.82966 9.93697C9.97216 9.46403 10.3683 9.21678 10.8015 9.33466C11.1392 9.42666 11.3117 9.63941 11.41 10.0865C11.4827 10.4185 11.4912 10.8311 11.4755 13.259C11.4656 14.869 11.4599 15.6568 11.4071 16.0794C11.3544 16.3453 11.2661 16.4172 11.1179 16.5322V16.5308ZM51.2202 11.9969H52.2348L52.2191 11.0697C52.2035 10.2187 52.1906 10.1224 52.0781 9.89097C51.8999 9.52728 51.6377 9.36484 51.2216 9.36484C50.7215 9.36484 50.4051 9.60922 50.2555 10.1095C50.1914 10.3222 50.1244 11.787 50.1728 11.9135C50.1999 11.984 50.3453 11.9969 51.2202 11.9969ZM44.4372 9.88809C44.3768 9.76029 44.2797 9.6538 44.1585 9.58252C44.0372 9.51123 43.8975 9.47846 43.7575 9.48847C43.4923 9.5089 43.2397 9.61074 43.0336 9.78028L42.8526 9.91972V16.5811L43.0336 16.7205C43.444 17.0368 43.8943 17.1029 44.2049 16.893C44.3336 16.8014 44.4272 16.6679 44.47 16.515C44.5512 16.2792 44.5583 15.9759 44.5484 13.1728C44.537 10.2518 44.5313 10.0793 44.4372 9.88809Z" fill="black" />
          <path d="M57.0199 6.88709C56.8176 4.44191 56.6565 3.64841 56.1578 2.62922C55.4952 1.27941 54.539 0.567844 53.1767 0.411157C52.1236 0.290407 48.1593 0.119344 44.4927 0.0374068C38.1429 -0.104906 27.7034 0.169657 26.3696 0.513219C25.7743 0.660593 25.2334 0.976853 24.8106 1.42459C23.9685 2.26984 23.4654 3.48309 23.2645 5.16209C22.8042 8.99447 22.7943 13.6232 23.2374 17.595C23.4284 19.3028 23.8217 20.4125 24.5598 21.3268C25.0201 21.8975 25.8153 22.3819 26.5249 22.5271C27.0237 22.6292 29.5174 22.77 33.1512 22.9008C33.6927 22.921 35.1248 22.954 36.336 22.9756C38.8583 23.0202 43.4967 22.9943 46.1486 22.9195C47.9327 22.8692 51.1845 22.7355 51.793 22.6881C51.964 22.6752 52.3602 22.6493 52.6737 22.632C53.7267 22.5717 54.3965 22.3503 55.0249 21.8515C55.8386 21.206 56.4684 20.0143 56.7349 18.6157C56.9871 17.2932 57.1553 14.9371 57.1895 12.2619C57.218 10.0266 57.1795 8.82197 57.0199 6.88422V6.88709ZM31.7347 6.00159L30.5548 6.01597L30.5035 18.7091L29.4804 18.722C28.6895 18.7335 28.4487 18.7206 28.4301 18.6703C28.4159 18.6343 28.4002 15.7723 28.3931 12.3108L28.3803 6.01597L26.076 5.98722V4.00347L32.8861 4.03078L32.9146 5.98578L31.7347 6.00016V6.00159ZM38.9694 13.2768V18.735H37.1055V18.16C37.1055 17.7273 37.0899 17.585 37.0386 17.585C37.0015 17.585 36.8334 17.7273 36.6638 17.9012C36.2947 18.2793 35.8587 18.5826 35.4853 18.7235C34.713 19.0153 33.9805 18.8442 33.6684 18.3023C33.382 17.8063 33.3777 17.6942 33.3777 12.5451V7.81572H35.2402L35.2545 12.2691C35.2687 16.6448 35.2701 16.7253 35.3742 16.9036C35.5124 17.1393 35.7219 17.204 36.0553 17.1106C36.252 17.056 36.3859 16.9597 36.7037 16.6405L37.1055 16.238V7.81572H38.9694V13.2739V13.2768ZM46.2398 17.9558C46.0759 18.3253 45.7097 18.6861 45.409 18.7752C44.6267 19.0081 43.9983 18.8183 43.2729 18.1298C43.0478 17.9156 42.8383 17.7431 42.807 17.7431C42.7685 17.7431 42.7485 17.9098 42.7485 18.239V18.735H40.8846V4.00347H42.7485V6.40697C42.7485 7.72803 42.7656 8.81047 42.787 8.81047C42.8084 8.81047 43.005 8.63509 43.2245 8.42234C43.7289 7.93216 44.1493 7.71653 44.6837 7.67628C45.637 7.60297 46.2056 8.09891 46.4649 9.22878C46.5462 9.58097 46.5533 9.98347 46.5533 13.2509C46.5533 17.2299 46.5547 17.2472 46.2398 17.9558ZM54.1272 15.7708C54.1175 16.1215 54.0808 16.4709 54.0174 16.8159C53.7581 17.7848 53.0684 18.4719 52.0709 18.7537C50.7285 19.1332 49.2494 18.5122 48.6594 17.3205C48.3288 16.652 48.316 16.5183 48.316 13.2509C48.316 10.5872 48.326 10.2595 48.4101 9.89578C48.6495 8.86797 49.2423 8.20241 50.2469 7.83297C50.5376 7.72659 50.8411 7.67053 51.1446 7.66478C52.2291 7.64178 53.3035 8.22972 53.7552 9.18709C54.0588 9.83253 54.0972 10.11 54.1272 11.9298L54.1542 13.5628L50.1799 13.5902L50.1657 14.687C50.1443 16.2352 50.2483 16.711 50.663 16.9913C51.0107 17.2285 51.5465 17.2098 51.8372 16.9525C52.1108 16.711 52.1877 16.4508 52.2148 15.6918L52.239 15.0262H54.1585L54.1272 15.7708Z" fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_123_178">
            <rect width="57" height="23" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  )
}

export { YouTubeLink };