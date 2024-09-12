import LoginWord from 'components/login/LoginWord';
import Layout from 'components/common/Layout';
import LoginList from 'components/login/LoginList';

function Login() {
  return (
    <Layout>
      <LoginWord />
      <LoginList loginItemList={DummyData} />
    </Layout>
  );
}

export default Login;

const DummyData = [
  {
    icon: (
      <svg
        width="306"
        height="53"
        viewBox="0 0 306 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_238_4061)">
          <rect x="3" y="3" width="300" height="45" rx="6" fill="white" />
          <rect
            width="24"
            height="24"
            transform="translate(99 13.5)"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M122.04 25.7615C122.04 24.946 121.967 24.1619 121.831 23.4092H111V27.8576H117.189C116.922 29.2951 116.112 30.513 114.894 31.3285V34.214H118.611C120.785 32.2119 122.04 29.2637 122.04 25.7615Z"
            fill="#4285F4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M111 36.9998C114.105 36.9998 116.708 35.97 118.611 34.2137L114.894 31.3282C113.865 32.0182 112.547 32.4259 111 32.4259C108.005 32.4259 105.47 30.403 104.565 27.6848H100.723V30.6644C102.615 34.4228 106.505 36.9998 111 36.9998Z"
            fill="#34A853"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M104.565 27.685C104.335 26.995 104.205 26.2579 104.205 25.5C104.205 24.742 104.335 24.005 104.565 23.315V20.3354H100.723C99.9443 21.8879 99.5 23.6443 99.5 25.5C99.5 27.3557 99.9443 29.112 100.723 30.6645L104.565 27.685Z"
            fill="#FBBC05"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M111 18.5739C112.688 18.5739 114.204 19.1541 115.396 20.2936L118.695 16.9952C116.703 15.1395 114.1 14 111 14C106.505 14 102.615 16.577 100.723 20.3355L104.565 23.315C105.47 20.5968 108.005 18.5739 111 18.5739Z"
            fill="#EA4335"
          />
          <path
            d="M148.928 19.4404V20.5977C148.928 21.8428 148.928 23.1904 148.562 25.0654H150.451V26.208H145.134V31.7598H143.728V26.208H138.483V25.0654H147.155C147.551 23.1978 147.551 21.8208 147.551 20.5977V20.583H139.948V19.4404H148.928ZM161.936 19.1768V20.041C161.936 20.9126 161.936 22.0112 161.657 23.4395H163.459V24.5527H151.447V23.4395H160.266C160.529 22.1064 160.559 21.103 160.559 20.29H152.956V19.1768H161.936ZM161.95 25.7246V29.167H154.26V30.5H162.287V31.6133H152.868V28.0977H160.573V26.8379H152.854V25.7246H161.95ZM180.085 29.0059V30.1777H168.073V29.0059H173.361V26.7061H169.538V22.5312H177.243V20.6855H169.509V19.543H178.62V23.6445H170.915V25.5635H178.928V26.7061H174.738V29.0059H180.085ZM191.438 19.9531V21.3594C191.438 23.0586 191.438 24.9043 190.954 27.7021L189.533 27.5703C190.061 24.9482 190.061 23.0146 190.061 21.3594V21.0957H182.326V19.9531H191.438ZM193.005 28.7275V29.8848H181.037V28.7275H193.005ZM204.885 18.6348V28.1709H203.493V18.6348H204.885ZM205.28 30.3389V31.4668H196.301V27.2041H197.707V30.3389H205.28ZM197.766 19.5137C199.743 19.5137 201.252 20.8613 201.252 22.7656C201.252 24.6992 199.743 26.0322 197.766 26.0322C195.788 26.0322 194.265 24.6992 194.265 22.7656C194.265 20.8613 195.788 19.5137 197.766 19.5137ZM197.766 20.7295C196.535 20.7295 195.627 21.5645 195.627 22.7656C195.627 23.9961 196.535 24.8164 197.766 24.8164C198.967 24.8164 199.89 23.9961 199.89 22.7656C199.89 21.5645 198.967 20.7295 197.766 20.7295Z"
            fill="black"
            fillOpacity="0.54"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_238_4061"
            x="0"
            y="0"
            width="306"
            height="53"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.168 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_238_4061"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.084 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_238_4061"
              result="effect2_dropShadow_238_4061"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_238_4061"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="306"
        height="53"
        viewBox="0 0 306 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_238_4062)">
          <rect x="3" y="3" width="300" height="45" rx="6" fill="#FEE500" />
          <g clipPath="url(#clip0_238_4062)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M108 17.1001C103.029 17.1001 99 20.2131 99 24.0524C99 26.4401 100.558 28.5451 102.932 29.7971L101.933 33.4446C101.845 33.7669 102.213 34.0238 102.496 33.837L106.873 30.9483C107.243 30.9839 107.618 31.0047 108 31.0047C112.97 31.0047 117 27.8919 117 24.0524C117 20.2131 112.97 17.1001 108 17.1001Z"
              fill="black"
            />
          </g>
          <path
            d="M132.324 20.3652C132.324 24.3643 131.226 27.792 126.348 30.2236L125.454 28.9932C127.747 27.8579 129.109 26.5396 129.878 24.9648L125.762 25.3604L125.557 23.9541L130.376 23.6465C130.544 23.0312 130.647 22.3794 130.698 21.6836H126.245V20.3652H132.324ZM135.811 19.0615V24.2471H137.773V25.5801H135.811V32.2744H134.185V19.0615H135.811ZM145.288 20.3652C145.288 24.3643 144.189 27.792 139.312 30.2236L138.418 28.9932C140.71 27.8579 142.073 26.5396 142.842 24.9648L138.726 25.3604L138.521 23.9541L143.34 23.6465C143.508 23.0312 143.611 22.3794 143.662 21.6836H139.209V20.3652H145.288ZM148.774 19.0615V24.2471H150.737V25.5801H148.774V32.2744H147.148V19.0615H148.774ZM157.388 19.8086C160.229 19.8086 162.324 21.2295 162.324 23.3828C162.324 25.3677 160.618 26.6934 158.193 26.9277V29.3594H163.467V30.6924H151.367V29.3594H156.582V26.9277C154.172 26.6934 152.466 25.3677 152.48 23.3828C152.466 21.2295 154.561 19.8086 157.388 19.8086ZM157.388 21.127C155.454 21.1123 154.062 21.9912 154.077 23.3828C154.062 24.8184 155.454 25.668 157.388 25.668C159.351 25.668 160.728 24.8184 160.728 23.3828C160.728 21.9912 159.351 21.1123 157.388 21.127ZM179.99 29.418V30.7656H167.891V29.418H173.105V27.2646H169.326V22.9287H176.943V21.2881H169.297V19.9697H178.555V24.2178H170.952V25.9316H178.862V27.2646H174.717V29.418H179.99ZM191.387 20.3506V21.8447C191.387 23.6172 191.387 25.4482 190.903 28.2314L189.248 28.085C189.761 25.4775 189.761 23.5586 189.761 21.8447V21.6689H182.129V20.3506H191.387ZM192.925 29.1543V30.4873H180.854V29.1543H192.925ZM204.849 19.0762V28.6416H203.208V19.0762H204.849ZM205.215 30.7217V32.04H196.089V27.6748H197.729V30.7217H205.215ZM197.627 19.9404C199.634 19.9404 201.187 21.332 201.187 23.251C201.187 25.2139 199.634 26.5762 197.627 26.5762C195.605 26.5762 194.053 25.2139 194.053 23.251C194.053 21.332 195.605 19.9404 197.627 19.9404ZM197.627 21.3613C196.499 21.3613 195.635 22.1084 195.649 23.251C195.635 24.4229 196.499 25.1553 197.627 25.1553C198.726 25.1553 199.59 24.4229 199.59 23.251C199.59 22.1084 198.726 21.3613 197.627 21.3613Z"
            fill="black"
            fillOpacity="0.85"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_238_4062"
            x="0"
            y="0"
            width="306"
            height="53"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_238_4062"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_238_4062"
              result="effect2_dropShadow_238_4062"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_238_4062"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_238_4062">
            <rect
              width="17.9999"
              height="18"
              fill="white"
              transform="translate(99 16.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];
