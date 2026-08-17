import svgPaths from "../../assets/svg-paths";
import { imgContainer } from "../../assets/svg-link";
import { createContext, useContext } from "react";

export const CertContext = createContext<(() => void) | undefined>(undefined);

const imgMosaicBackground = "/images/certificates/mosaic-background-1.png";
const imgAwsCertifiedCloudPractitioner31 = "/images/certificates/aws-certified-cloud-practitioner.png";
const imgServicenowCertifiedSystemAdministratorCsa11 = "/images/certificates/servicenow-csa-1.png";
const imgCertifiedImplementationSpecialistDataFoundation11 = "/images/certificates/servicenow-cis-df-1.png";
const imgOracleLogoDownloadFreePng1 = "/images/certificates/oracle-logo-1.png";
const imgImage4 = "/images/certificates/badge-image-4.png";
const imgImage5 = "/images/certificates/badge-image-5.png";
const imgImage6 = "/images/certificates/badge-image-6.png";
//saravedi santho 
function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-sans font-semibold font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.6)] text-center tracking-[1.4px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">FEATURES</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16.8px] py-[6.8px] relative rounded-[26843500px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.01px_0_0] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Container2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="Container">
      <BackgroundBorder />
      <div className="[word-break:break-word] flex flex-col font-sans font-medium font-medium justify-center leading-[0] relative shrink-0 text-[52px] text-black text-center tracking-[-1.3px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[65px]">Workflows That Stay in Motion</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-sans font-normal font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.6)] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[28px]">From creation to collaboration to delivery — without breaking context.</p>
      </div>
    </div>
  );
}

function Heading() {
  return <div className="flex-[1_0_0] h-[28px] min-w-px relative" data-name="Heading 3" />;
}

function Container4() {
  return (
    <div className="col-1 content-stretch flex items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Heading />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0" data-name="AWS Logo">
      <svg width="56" height="34" viewBox="0 0 56 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.7822 12.1621C15.7822 12.8512 15.8567 13.4099 15.9871 13.8197C16.1361 14.2294 16.3224 14.6764 16.5831 15.1607C16.6762 15.3097 16.7135 15.4587 16.7135 15.5891C16.7135 15.7753 16.6017 15.9616 16.3596 16.1478L15.1862 16.9301C15.0186 17.0418 14.851 17.0977 14.702 17.0977C14.5157 17.0977 14.3295 17.0046 14.1432 16.8369C13.8825 16.5576 13.659 16.2596 13.4727 15.9616C13.2865 15.6449 13.1002 15.2911 12.8954 14.8627C11.4426 16.5762 9.61738 17.4329 7.41964 17.4329C5.85514 17.4329 4.60727 16.9859 3.69465 16.0919C2.78203 15.1979 2.31641 14.0059 2.31641 12.516C2.31641 10.9328 2.87515 9.64771 4.01127 8.67922C5.14739 7.71072 6.65601 7.22647 8.57438 7.22647C9.20763 7.22647 9.8595 7.28235 10.5486 7.37547C11.2377 7.4686 11.9455 7.6176 12.6905 7.78522V6.4256C12.6905 5.01011 12.3925 4.02298 11.8151 3.44561C11.2191 2.86824 10.2134 2.58887 8.77925 2.58887C8.12738 2.58887 7.45689 2.66336 6.76776 2.83099C6.07864 2.99861 5.40814 3.20349 4.75627 3.46424C4.45827 3.59461 4.23477 3.66911 4.1044 3.70636C3.97402 3.74361 3.8809 3.76224 3.8064 3.76224C3.54565 3.76224 3.41528 3.57599 3.41528 3.18486V2.27224C3.41528 1.97424 3.45253 1.75074 3.54565 1.62037C3.63878 1.48999 3.8064 1.35962 4.06715 1.22925C4.71902 0.893997 5.50127 0.614623 6.41389 0.391123C7.32651 0.148999 8.29501 0.0372498 9.31938 0.0372498C11.5357 0.0372498 13.1561 0.540123 14.1991 1.54587C15.2235 2.55161 15.745 4.07886 15.745 6.1276V12.1621H15.7822ZM8.22051 14.9931C8.83513 14.9931 9.46838 14.8813 10.1389 14.6578C10.8094 14.4343 11.4054 14.0246 11.9082 13.4658C12.2062 13.1119 12.4297 12.7208 12.5415 12.2738C12.6532 11.8268 12.7277 11.2867 12.7277 10.6535V9.87121C12.1876 9.74084 11.6102 9.62909 11.0142 9.55459C10.4182 9.48009 9.84088 9.44284 9.2635 9.44284C8.01563 9.44284 7.10301 9.68496 6.48839 10.1878C5.87377 10.6907 5.57577 11.3985 5.57577 12.3297C5.57577 13.2051 5.79927 13.8569 6.26489 14.3039C6.71189 14.7696 7.36376 14.9931 8.22051 14.9931ZM23.1763 17.0046C22.8411 17.0046 22.6176 16.9487 22.4686 16.8183C22.3196 16.7066 22.1892 16.4458 22.0775 16.0919L17.7006 1.69487C17.5888 1.32237 17.533 1.08025 17.533 0.949871C17.533 0.651872 17.682 0.484248 17.98 0.484248H19.8052C20.1591 0.484248 20.4012 0.540123 20.5316 0.670497C20.6806 0.782247 20.7923 1.043 20.9041 1.39687L24.0331 13.7266L26.9386 1.39687C27.0317 1.02437 27.1434 0.782247 27.2924 0.670497C27.4414 0.558748 27.7022 0.484248 28.0374 0.484248H29.5274C29.8813 0.484248 30.1234 0.540123 30.2724 0.670497C30.4214 0.782247 30.5518 1.043 30.6263 1.39687L33.569 13.8756L36.7911 1.39687C36.9029 1.02437 37.0333 0.782247 37.1636 0.670497C37.3126 0.558748 37.5548 0.484248 37.89 0.484248H39.6221C39.9201 0.484248 40.0878 0.633248 40.0878 0.949871C40.0878 1.043 40.0691 1.13612 40.0505 1.24787C40.0319 1.35962 39.9946 1.50862 39.9201 1.71349L35.4315 16.1106C35.3198 16.4831 35.1894 16.7252 35.0404 16.8369C34.8914 16.9487 34.6493 17.0232 34.3327 17.0232H32.7309C32.377 17.0232 32.1349 16.9673 31.9859 16.8369C31.8369 16.7066 31.7065 16.4644 31.632 16.0919L28.7452 4.07886L25.8769 16.0733C25.7838 16.4458 25.6721 16.6879 25.5231 16.8183C25.3741 16.9487 25.1133 17.0046 24.7781 17.0046H23.1763ZM47.1094 17.5074C46.1409 17.5074 45.1724 17.3957 44.2411 17.1722C43.3099 16.9487 42.5835 16.7066 42.0992 16.4272C41.8012 16.2596 41.5964 16.0733 41.5219 15.9057C41.4474 15.7381 41.4101 15.5518 41.4101 15.3842V14.4343C41.4101 14.0432 41.5591 13.8569 41.8385 13.8569C41.9502 13.8569 42.062 13.8756 42.1737 13.9128C42.2855 13.9501 42.4531 14.0246 42.6394 14.0991C43.2726 14.3784 43.9617 14.6019 44.6881 14.7509C45.4331 14.8999 46.1595 14.9744 46.9045 14.9744C48.0778 14.9744 48.9905 14.7696 49.6237 14.3598C50.257 13.9501 50.5922 13.3541 50.5922 12.5905C50.5922 12.069 50.4246 11.6406 50.0893 11.2867C49.7541 10.9328 49.1208 10.6162 48.2082 10.3182L45.5076 9.48009C44.148 9.05172 43.1422 8.41847 42.5276 7.58035C41.913 6.76085 41.5964 5.84823 41.5964 4.87973C41.5964 4.09748 41.764 3.40836 42.0992 2.81236C42.4345 2.21637 42.8815 1.69487 43.4402 1.28512C43.999 0.856747 44.6322 0.540123 45.3772 0.316624C46.1222 0.0931246 46.9045 0 47.724 0C48.1337 0 48.5621 0.0186249 48.9718 0.0744997C49.4002 0.130374 49.7913 0.204874 50.1825 0.279374C50.555 0.372499 50.9088 0.465623 51.2441 0.577373C51.5793 0.689122 51.8401 0.800872 52.0263 0.912621C52.2871 1.06162 52.4733 1.21062 52.5851 1.37824C52.6968 1.52724 52.7527 1.73212 52.7527 1.99287V2.86824C52.7527 3.25936 52.6037 3.46424 52.3243 3.46424C52.1753 3.46424 51.9332 3.38974 51.6166 3.24074C50.555 2.75649 49.363 2.51437 48.0406 2.51437C46.979 2.51437 46.1409 2.68199 45.5635 3.03586C44.9861 3.38974 44.6881 3.92986 44.6881 4.69348C44.6881 5.21498 44.8744 5.66198 45.2469 6.01585C45.6194 6.36973 46.3085 6.7236 47.2956 7.04022L49.9403 7.87835C51.2813 8.30672 52.2498 8.90272 52.8272 9.66634C53.4046 10.43 53.6839 11.3053 53.6839 12.2738C53.6839 13.0747 53.5163 13.8011 53.1997 14.4343C52.8645 15.0676 52.4175 15.6263 51.8401 16.0733C51.2627 16.5389 50.5736 16.8742 49.7727 17.1163C48.9346 17.3771 48.0592 17.5074 47.1094 17.5074Z" fill="#252F3E"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M50.6285 26.5601C44.5009 31.0859 35.5982 33.4885 27.9434 33.4885C17.2154 33.4885 7.54906 29.5214 0.248087 22.9282C-0.329286 22.4067 0.192212 21.699 0.881335 22.1087C8.7783 26.6904 18.5191 29.4655 28.5952 29.4655C35.3933 29.4655 42.8619 28.0501 49.7345 25.1446C50.7589 24.6789 51.6343 25.8151 50.6285 26.5601Z" fill="#FF9900"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M53.1799 23.6535C52.3976 22.6478 48.0021 23.1693 46.0093 23.4114C45.4133 23.4859 45.3201 22.9644 45.8603 22.5733C49.3618 20.1148 55.1169 20.8225 55.7874 21.642C56.4579 22.4801 55.6011 28.2352 52.3231 30.9917C51.8202 31.4201 51.336 31.1966 51.5595 30.6379C52.3045 28.794 53.9621 24.6406 53.1799 23.6535Z" fill="#FF9900"/>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full mb-[24px] h-[50px] flex items-center" data-name="Margin">
      <Group />
    </div>
  );
}

function MosaicBackground() {
  return (
    <div className="absolute h-[250px] left-0 mix-blend-multiply opacity-20 top-0 w-[302.4px]" data-name="Mosaic Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-13.7%] max-w-none top-0 w-[127.4%]" src={imgMosaicBackground} />
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%+0.2px)] size-[500px] top-[45px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="500" preserveAspectRatio="none" viewBox="0 0 500 500" width="500">
        <g id="SVG">
          <path d={svgPaths.p22b97900} id="Vector" stroke="url(#paint0_linear_0_41)" strokeWidth="48" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_41" x1="40" x2="460" y1="40" y2="40">
            <stop stopColor="#FF9900" stopOpacity="0" />
            <stop offset="0.2" stopColor="#FF9900" stopOpacity="0.4" />
            <stop offset="0.5" stopColor="#FF9900" stopOpacity="0.6" />
            <stop offset="0.8" stopColor="#FF9900" stopOpacity="0.4" />
            <stop offset="1" stopColor="#FF9900" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Svg1() {
  return <div className="drop-shadow-[0px_2px_2px_rgba(0,0,0,0.3)] relative shrink-0 size-[20px]" data-name="SVG" />;
}

function BackgroundShadow() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[52.255px]">
      <div className="flex-none rotate-[174.66deg]">
        <div className="content-stretch drop-shadow-[0px_4px_10px_rgba(237,113,0,0.6)] flex items-center justify-center pl-[12.533px] pr-[15.467px] relative rounded-[26843500px] size-[48px]" data-name="Background+Shadow">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[26843500px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 171, 94) 0%, rgb(237, 113, 0) 100%)" }} />
          <Svg1 />
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3px_6px_0px_rgba(255,255,255,0.7)]" />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52.255px] items-start justify-center left-[184.92px] top-[-25.98px] w-[50.374px]" data-name="Container">
      <BackgroundShadow />
    </div>
  );
}

function Svg2() {
  return <div className="drop-shadow-[0px_2px_2px_rgba(0,0,0,0.3)] h-[20.42px] relative shrink-0 w-[22px]" data-name="SVG" />;
}

function BackgroundShadow1() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[52.711px]">
      <div className="flex-none rotate-[174.06deg]">
        <div className="content-stretch drop-shadow-[0px_4px_10px_rgba(221,52,76,0.6)] flex items-center justify-center relative rounded-[26843500px] size-[48px]" data-name="Background+Shadow">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[26843500px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 123, 140) 0%, rgb(221, 52, 76) 100%)" }} />
          <Svg2 />
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3px_6px_0px_rgba(255,255,255,0.7)]" />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52.711px] items-start justify-center left-[334.17px] top-[37.99px] w-[51.099px]" data-name="Container">
      <BackgroundShadow1 />
    </div>
  );
}

function Svg3() {
  return <div className="drop-shadow-[0px_2px_2px_rgba(0,0,0,0.3)] relative shrink-0 size-[20px]" data-name="SVG" />;
}

function BackgroundShadow2() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[52.947px]">
      <div className="flex-none rotate-[173.74deg]">
        <div className="content-stretch drop-shadow-[0px_4px_10px_rgba(237,113,0,0.6)] flex items-center justify-center pb-[13.7px] pl-[13.693px] pr-[14.307px] pt-[14.3px] relative rounded-[26843500px] size-[48px]" data-name="Background+Shadow">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[26843500px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 171, 94) 0%, rgb(237, 113, 0) 100%)" }} />
          <Svg3 />
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3px_6px_0px_rgba(255,255,255,0.7)]" />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52.947px] items-start justify-center left-[393.01px] top-[188.65px] w-[51.462px]" data-name="Container">
      <BackgroundShadow2 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="h-[22.54px] relative shrink-0 w-[22px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="22.54" preserveAspectRatio="none" viewBox="0 0 22 22.54" width="22">
        <g clipPath="url(#clip0_0_38)" id="SVG">
          <path d={svgPaths.p1bdd6f00} fill="white" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p22bf6080} fill="white" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_0_38">
            <rect fill="white" height="22.54" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg4() {
  return (
    <div className="content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[22px]" data-name="SVG">
      <Svg5 />
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[53.152px]">
      <div className="flex-none rotate-[173.46deg]">
        <div className="content-stretch drop-shadow-[0px_4px_10px_rgba(1,168,141,0.6)] flex items-center justify-center pb-[12.39px] pl-[12.658px] pr-[13.342px] pt-[13.07px] relative rounded-[26843500px] size-[48px]" data-name="Background+Shadow">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[26843500px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(52, 224, 196) 0%, rgb(1, 168, 141) 100%)" }} />
          <Svg4 />
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3px_6px_0px_rgba(255,255,255,0.7)]" />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[53.152px] items-start justify-center left-[327.36px] top-[336.51px] w-[51.793px]" data-name="Container">
      <BackgroundShadow3 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[20px]" data-name="SVG">
      <div className="absolute inset-[0_7.14%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 17.1429 20" width="17.1429">
          <path clipRule="evenodd" d={svgPaths.p2f78d300} fill="white" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Svg7 />
    </div>
  );
}

function BackgroundShadow4() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[53.37px]">
      <div className="flex-none rotate-[173.17deg]">
        <div className="content-stretch drop-shadow-[0px_4px_10px_rgba(201,37,209,0.6)] flex items-center justify-center pb-[13.388px] pl-[14.664px] pr-[13.336px] pt-[14.612px] relative rounded-[26843500px] size-[48px]" data-name="Background+Shadow">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[26843500px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(238, 112, 244) 0%, rgb(201, 37, 209) 100%)" }} />
          <Svg6 />
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3px_6px_0px_rgba(255,255,255,0.7)]" />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[53.37px] items-start justify-center left-[175.98px] top-[394.05px] w-[53.088px]" data-name="Container">
      <BackgroundShadow4 />
    </div>
  );
}

function Svg8() {
  return <div className="drop-shadow-[0px_2px_2px_rgba(0,0,0,0.3)] h-[21.35px] relative shrink-0 w-[26px]" data-name="SVG" />;
}

function BackgroundShadow5() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[53.811px]">
      <div className="flex-none rotate-[172.56deg]">
        <div className="content-stretch drop-shadow-[0px_4px_10px_rgba(1,168,141,0.6)] flex items-center justify-center pb-[12.877px] pl-[10.427px] pr-[11.573px] pt-[13.773px] relative rounded-[26843500px] size-[48px]" data-name="Background+Shadow">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[26843500px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(52, 224, 196) 0%, rgb(1, 168, 141) 100%)" }} />
          <Svg8 />
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3px_6px_0px_rgba(255,255,255,0.7)]" />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[53.811px] items-start justify-center left-[27.55px] top-[326.3px] w-[53.456px]" data-name="Container">
      <BackgroundShadow5 />
    </div>
  );
}

function Svg9() {
  return <div className="drop-shadow-[0px_2px_2px_rgba(0,0,0,0.3)] relative shrink-0 size-[20px]" data-name="SVG" />;
}

function BackgroundShadow6() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[53.811px]">
      <div className="flex-none rotate-[172.56deg]">
        <div className="content-stretch drop-shadow-[0px_4px_10px_rgba(140,79,255,0.6)] flex items-center justify-center pb-[12.348px] pl-[13.21px] pr-[14.79px] pt-[15.652px] relative rounded-[26843500px] size-[48px]" data-name="Background+Shadow">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[26843500px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(179, 135, 255) 0%, rgb(140, 79, 255) 100%)" }} />
          <Svg9 />
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3px_6px_0px_rgba(255,255,255,0.7)]" />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[53.811px] items-start justify-center left-[-27.62px] top-[175.34px] w-[52.835px]" data-name="Container">
      <BackgroundShadow6 />
    </div>
  );
}

function Svg10() {
  return <div className="drop-shadow-[0px_2px_2px_rgba(0,0,0,0.3)] h-[17.18px] relative shrink-0 w-[26px]" data-name="SVG" />;
}

function BackgroundShadow7() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[54.023px]">
      <div className="flex-none rotate-[172.27deg]">
        <div className="content-stretch drop-shadow-[0px_4px_10px_rgba(122,161,22,0.6)] flex items-center justify-center pb-[14.916px] pl-[10.257px] pr-[11.743px] pt-[15.904px] relative rounded-[26843500px] size-[48px]" data-name="Background+Shadow">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[26843500px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(168, 211, 61) 0%, rgb(122, 161, 22) 100%)" }} />
          <Svg10 />
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3px_6px_0px_rgba(255,255,255,0.7)]" />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[54.023px] items-start justify-center left-[40.69px] top-[28.87px] w-[53.18px]" data-name="Container">
      <BackgroundShadow7 />
    </div>
  );
}

function Container7() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[455.118px]">
      <div className="flex-none rotate-[-174.98deg]">
        <div className="relative size-[420px]" data-name="Container">
          <Container8 />
          <Container9 />
          <Container10 />
          <Container11 />
          <Container12 />
          <Container13 />
          <Container14 />
          <Container15 />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[31.291px] items-center justify-center left-[calc(50%+11.87px)] top-[333.84px] w-[131.251px]">
            <div className="flex-none rotate-[174.98deg]">
              <div className="[word-break:break-word] flex flex-col font-sans font-medium font-medium justify-center leading-[0] relative text-[#7a8a9e] text-[13px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[19.5px]">100+ Apps Integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.2px)] size-[500px] top-[45px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container17() {
  return <div className="-translate-x-1/2 absolute bottom-0 left-[calc(50%-0.01px)] top-[-0.8px] w-[127.26px]" data-name="Container" />;
}

function Container16() {
  return (
    <div className="absolute h-[19.5px] left-0 top-[120px] w-[302.4px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px overflow-clip relative rounded-[12px]" data-name="Background">
      <MosaicBackground />
      <Svg />
      <Container6 />
      <Container16 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[250px] min-h-[250px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center min-h-[inherit] relative size-full">
        <Background />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-sans font-medium font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[28px]">Cloud Practitioner</p>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="relative shrink-0 size-[10.664px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.6635" preserveAspectRatio="none" viewBox="0 0 10.664 10.6635" width="10.664">
        <g id="Group 22">
          <path d={svgPaths.p35e02400} fill="#ED7100" id="Vector" />
          <path d={svgPaths.p18fa3100} fill="#ED7100" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonViewCredential() {
  const onOpen = useContext(CertContext);
  return (
    <button onClick={onOpen} aria-label="View AWS Credential" className="absolute cursor-pointer hover:scale-105 transition-transform bg-white left-[276px] rounded-[4792.022px] top-[28.58px] border-none outline-none shadow-sm z-50 pointer-events-auto" data-name="Button - View Credential">
      <span className="sr-only">View AWS Credential</span>
      <div aria-hidden className="absolute border-[#ed7100] border-[0.479px] border-solid inset-0 pointer-events-none rounded-[4792.022px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[7.668px] py-[4.793px] relative size-full">
        <Group2 />
      </div>
    </button>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col gap-[11.175px] items-start pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Heading1 />
      <div className="relative shrink-0 size-[72px]" data-name="aws-certified-cloud-practitioner (3) 1">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAwsCertifiedCloudPractitioner31} />
      </div>
      <ButtonViewCredential />
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <HorizontalBorder />
      </div>
    </div>
  );
}

function BackgroundBorderShadow({ children }: any) {
  return (
    <div className="bg-white flex-[1_0_0] h-[573px] min-w-px relative rounded-[12px]" data-name="Background+Border+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between px-[25px] py-[33px] relative size-full">
          <Margin />
          <div className="w-full flex-1 flex items-center justify-center relative z-10">
             {children || <Container5 />}
          </div>
          <Margin1 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[28.747px] relative shrink-0 w-[198.198px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="28.7472" preserveAspectRatio="none" viewBox="0 0 198.199 28.7472" width="198.199">
        <g id="Group 21">
          <path clipRule="evenodd" d={svgPaths.p20c1fd00} fill="url(#paint0_linear_0_21)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p22090500} fill="url(#paint1_linear_0_21)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p16aaba00} fill="url(#paint2_linear_0_21)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p114c4a00} fill="url(#paint3_linear_0_21)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p19aa3ac0} fill="url(#paint4_linear_0_21)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p1dbb8200} fill="url(#paint5_linear_0_21)" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p160e7180} fill="#62D84E" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p1aeccbc0} fill="url(#paint6_linear_0_21)" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.p175b1d00} fill="url(#paint7_linear_0_21)" fillRule="evenodd" id="Vector_9" />
          <path d={svgPaths.p224db100} fill="url(#paint8_linear_0_21)" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.p18fe8940} fill="url(#paint9_linear_0_21)" fillRule="evenodd" id="Vector_11" />
          <path d={svgPaths.p2c279372} fill="url(#paint10_linear_0_21)" id="Vector_12" />
          <path d={svgPaths.p382ab680} fill="url(#paint11_linear_0_21)" id="Vector_13" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_21" x1="75.6488" x2="75.6488" y1="0" y2="6.05188">
            <stop stopColor="#273D7C" />
            <stop offset="1" stopColor="#09304C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_21" x1="7.56485" x2="7.56485" y1="7.5645" y2="28.7461">
            <stop stopColor="#273D7C" />
            <stop offset="1" stopColor="#09304C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_21" x1="24.9633" x2="24.9633" y1="7.5645" y2="28.7461">
            <stop stopColor="#273D7C" />
            <stop offset="1" stopColor="#09304C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_21" x1="90.0216" x2="90.0216" y1="7.5645" y2="28.7461">
            <stop stopColor="#273D7C" />
            <stop offset="1" stopColor="#09304C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_21" x1="110.446" x2="110.446" y1="7.5645" y2="28.7461">
            <stop stopColor="#273D7C" />
            <stop offset="1" stopColor="#09304C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_0_21" x1="130.872" x2="130.872" y1="7.5645" y2="28.7461">
            <stop stopColor="#273D7C" />
            <stop offset="1" stopColor="#09304C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_0_21" x1="42.3633" x2="42.3633" y1="9.0774" y2="28.746">
            <stop stopColor="#273D7C" />
            <stop offset="1" stopColor="#09304C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_0_21" x1="60.5183" x2="60.5183" y1="9.0774" y2="28.746">
            <stop stopColor="#273D7C" />
            <stop offset="1" stopColor="#09304C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_0_21" x1="75.6488" x2="75.6488" y1="9.0774" y2="28.746">
            <stop stopColor="#273D7C" />
            <stop offset="1" stopColor="#09304C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_0_21" x1="179.287" x2="179.287" y1="9.0774" y2="28.746">
            <stop stopColor="#273D7C" />
            <stop offset="1" stopColor="#09304C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_0_21" x1="195.173" x2="195.173" y1="22.6953" y2="28.7472">
            <stop stopColor="#273D7C" />
            <stop offset="1" stopColor="#09304C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_0_21" x1="195.173" x2="195.173" y1="24.2082" y2="27.2341">
            <stop stopColor="#273D7C" />
            <stop offset="1" stopColor="#09304C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Group1 />
      </div>
    </div>
  );
}

function MosaicBackground1() {
  return (
    <div className="absolute h-[250px] left-0 mix-blend-plus-lighter opacity-5 top-[-0.38px] w-[302.4px]" data-name="Mosaic Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-13.7%] max-w-none top-0 w-[127.4%]" src={imgMosaicBackground} />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin3() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[138.04px]" data-name="Container">
      <div className="h-[15.99px] mb-[-0.01px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin3 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <BackgroundBorder1 />
        <Container23 />
      </div>
    </div>
  );
}

function Margin4() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.36px]" data-name="Margin" />;
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container22 />
      <Margin4 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexStart() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-start">
      <BackgroundBorderShadow2 />
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(3,45,66,0.1)] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(3,45,66,0.2)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin5() {
  return <div className="h-[14.5px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[124.84px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin5 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <OverlayBorder />
        <Container25 />
      </div>
    </div>
  );
}

function Margin6() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.36px]" data-name="Margin" />;
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-[#63e452] content-stretch drop-shadow-[0px_4px_12px_rgba(99,228,82,0.3)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#63e452] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container24 />
      <Margin6 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexEnd() {
  return (
    <div className="content-stretch flex flex-col items-end pt-[4.49px] relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-end">
      <BackgroundBorderShadow3 />
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(3,45,66,0.1)] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(3,45,66,0.2)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin7() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[137.63px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin7 />
    </div>
  );
}

function Container26() {
  return (
    <div className="mr-[-0.01px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <OverlayBorder1 />
        <Container27 />
      </div>
    </div>
  );
}

function Margin8() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.77px]" data-name="Margin" />;
}

function BackgroundBorderShadow4() {
  return (
    <div className="bg-[#63e452] content-stretch drop-shadow-[0px_4px_12px_rgba(99,228,82,0.3)] flex items-center justify-between pl-[12.8px] pr-[12.81px] py-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#63e452] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container26 />
      <Margin8 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexEnd1() {
  return (
    <div className="content-stretch flex flex-col items-end pt-[4.5px] relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-end">
      <BackgroundBorderShadow4 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin9() {
  return <div className="h-[14.5px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[126.64px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin9 />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <BackgroundBorder2 />
        <Container29 />
      </div>
    </div>
  );
}

function Margin10() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.77px]" data-name="Margin" />;
}

function BackgroundBorderShadow5() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-between pl-[12.8px] pr-[12.81px] py-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container28 />
      <Margin10 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexStart1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4.5px] relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-start">
      <BackgroundBorderShadow5 />
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin11() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[138.05px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin11 />
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <BackgroundBorder3 />
        <Container31 />
      </div>
    </div>
  );
}

function Margin12() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.35px]" data-name="Margin" />;
}

function BackgroundBorderShadow6() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container30 />
      <Margin12 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexStart2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4.5px] relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-start">
      <BackgroundBorderShadow6 />
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin13() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[138.21px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin13 />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <BackgroundBorder4 />
        <Container33 />
      </div>
    </div>
  );
}

function Margin14() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.19px]" data-name="Margin" />;
}

function BackgroundBorderShadow7() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container32 />
      <Margin14 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexStart3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4.5px] relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-start">
      <BackgroundBorderShadow7 />
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(3,45,66,0.1)] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(3,45,66,0.2)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin15() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[137.63px]" data-name="Container">
      <div className="h-[15.99px] mb-[-0.01px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin15 />
    </div>
  );
}

function Container34() {
  return (
    <div className="mr-[-0.01px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <OverlayBorder2 />
        <Container35 />
      </div>
    </div>
  );
}

function Margin16() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.77px]" data-name="Margin" />;
}

function BackgroundBorderShadow8() {
  return (
    <div className="bg-[#63e452] content-stretch drop-shadow-[0px_4px_12px_rgba(99,228,82,0.3)] flex items-center justify-between pl-[12.8px] pr-[12.81px] py-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#63e452] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container34 />
      <Margin16 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexEnd2() {
  return (
    <div className="content-stretch flex flex-col items-end pt-[4.5px] relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-end">
      <BackgroundBorderShadow8 />
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin17() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[137.64px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin17 />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <BackgroundBorder5 />
        <Container37 />
      </div>
    </div>
  );
}

function Margin18() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.76px]" data-name="Margin" />;
}

function BackgroundBorderShadow9() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container36 />
      <Margin18 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexStart4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4.49px] relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-start">
      <BackgroundBorderShadow9 />
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#f9fafb] left-0 rounded-[26843500px] size-[32px] top-[calc(50%-0.01px)]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-sans font-normal font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">📋</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.65px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(0,0,0,0.6)] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[12.5px] mb-0">New hire onboarding for John</p>
        <p className="leading-[12.5px]">Doe.</p>
      </div>
    </div>
  );
}

function Margin19() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[1.35px] relative shrink-0 w-full" data-name="Margin">
      <Container40 />
    </div>
  );
}

function Container39() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[44px] top-[calc(50%-4.5px)] w-[138.04px]" data-name="Container">
      <div className="h-[15.99px] mb-[-0.01px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin19 />
    </div>
  );
}

function Container38() {
  return (
    <div className="-translate-y-1/2 absolute h-[42.99px] left-[12.8px] top-1/2 w-[182.04px]" data-name="Container">
      <BackgroundBorder6 />
      <Container39 />
    </div>
  );
}

function Margin20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[194.84px] pl-[8px] top-[23.03px]" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal font-normal justify-center leading-[0] relative shrink-0 text-[9px] text-[rgba(0,0,0,0.4)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[13.5px]">11:00</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow10() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)] h-[68.59px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container38 />
      <Margin20 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexStart5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4.5px] relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-start">
      <BackgroundBorderShadow10 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.79px] right-[0.02px] top-[-0.8px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-semibold font-semibold justify-center leading-[0] relative shrink-0 text-[#032d42] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">IT Provisioning</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(3,45,66,0.8)] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[12.5px]">Laptop and software assigned.</p>
      </div>
    </div>
  );
}

function Margin21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[1.1px] right-0 top-[15.99px]" data-name="Margin">
      <Container44 />
    </div>
  );
}

function Container42() {
  return (
    <div className="-translate-y-1/2 absolute h-[30.49px] left-[44px] top-[calc(50%-1.45px)] w-[134.73px]" data-name="Container">
      <Container43 />
      <Margin21 />
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(3,45,66,0.1)] left-0 rounded-[26843500px] size-[32px] top-1/2" data-name="Overlay+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-sans font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#032d42] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">💻</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(3,45,66,0.2)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="-translate-y-1/2 absolute h-[32px] left-[12.8px] top-1/2 w-[178.71px]" data-name="Container">
      <Container42 />
      <OverlayBorder3 />
    </div>
  );
}

function Margin22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[194.85px] pl-[8px] top-[20.61px]" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal font-normal justify-center leading-[0] relative shrink-0 text-[9px] text-[rgba(3,45,66,0.6)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[13.5px]">11:05</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow11() {
  return (
    <div className="bg-[#63e452] drop-shadow-[0px_4px_12px_rgba(99,228,82,0.3)] h-[57.6px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#63e452] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container41 />
      <Margin22 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexEnd3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-end">
      <BackgroundBorderShadow11 />
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#f9fafb] left-0 rounded-[26843500px] size-[32px] top-[calc(50%-0.01px)]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-sans font-normal font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">🏢</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.79px] right-0 top-[-0.8px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-semibold font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Facilities</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.65px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(0,0,0,0.6)] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[12.5px] mb-0">Security badge ready for</p>
        <p className="leading-[12.5px]">pickup.</p>
      </div>
    </div>
  );
}

function Margin23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[1.35px] right-0 top-[15.99px]" data-name="Margin">
      <Container48 />
    </div>
  );
}

function Container46() {
  return (
    <div className="-translate-y-1/2 absolute h-[42.99px] left-[44px] top-[calc(50%-1.53px)] w-[138.04px]" data-name="Container">
      <Container47 />
      <Margin23 />
    </div>
  );
}

function Container45() {
  return (
    <div className="-translate-y-1/2 absolute h-[42.99px] left-[12.8px] top-1/2 w-[182.04px]" data-name="Container">
      <BackgroundBorder7 />
      <Container46 />
    </div>
  );
}

function Margin24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[194.84px] pl-[8px] top-[26.01px]" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal font-normal justify-center leading-[0] relative shrink-0 text-[9px] text-[rgba(0,0,0,0.4)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[13.5px]">11:30</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow12() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)] h-[68.59px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container45 />
      <Margin24 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexStart6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[3.06px] relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-start">
      <BackgroundBorderShadow12 />
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(3,45,66,0.1)] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Overlay+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-sans font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#032d42] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">👤</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(3,45,66,0.2)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.79px] right-0 top-[-0.8px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-semibold font-semibold justify-center leading-[0] relative shrink-0 text-[#032d42] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Manager</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12.9px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(3,45,66,0.8)] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[12.5px]">Welcome kit ordered! Ready for</p>
      </div>
    </div>
  );
}

function Margin25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[1.1px] right-0 top-[15.99px]" data-name="Margin">
      <Container52 />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[42.99px] relative shrink-0 w-[138.21px]" data-name="Container">
      <Container51 />
      <Margin25 />
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <OverlayBorder4 />
        <Container50 />
      </div>
    </div>
  );
}

function Margin26() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-sans font-normal font-normal justify-center leading-[0] relative shrink-0 text-[9px] text-[rgba(3,45,66,0.6)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[13.5px]">11:45</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow13() {
  return (
    <div className="bg-[#63e452] content-stretch drop-shadow-[0px_4px_12px_rgba(99,228,82,0.3)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#63e452] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container49 />
      <Margin26 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexEnd4() {
  return (
    <div className="content-stretch flex flex-col items-end pt-[2.97px] relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-end">
      <BackgroundBorderShadow13 />
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin27() {
  return <div className="h-[14.5px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[121.7px]" data-name="Container">
      <div className="h-[15.99px] mb-[-0.01px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin27 />
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <BackgroundBorder8 />
        <Container54 />
      </div>
    </div>
  );
}

function Margin28() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.66px]" data-name="Margin" />;
}

function BackgroundBorderShadow14() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container53 />
      <Margin28 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexStart7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4.5px] relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-start">
      <BackgroundBorderShadow14 />
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="bg-[rgba(3,45,66,0.1)] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(3,45,66,0.2)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin29() {
  return <div className="h-[14.5px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[130.5px]" data-name="Container">
      <div className="h-[15.99px] mb-[-0.01px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin29 />
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <OverlayBorder5 />
        <Container56 />
      </div>
    </div>
  );
}

function Margin30() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.2px]" data-name="Margin" />;
}

function BackgroundBorderShadow15() {
  return (
    <div className="bg-[#63e452] content-stretch drop-shadow-[0px_4px_12px_rgba(99,228,82,0.3)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#63e452] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container55 />
      <Margin30 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexEnd5() {
  return (
    <div className="content-stretch flex flex-col items-end pt-[4.5px] relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-end">
      <BackgroundBorderShadow15 />
    </div>
  );
}

function OverlayBorder6() {
  return (
    <div className="bg-[rgba(3,45,66,0.1)] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(3,45,66,0.2)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin31() {
  return <div className="h-[14.5px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[115.36px]" data-name="Container">
      <div className="h-[15.99px] mb-[-0.01px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin31 />
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <OverlayBorder6 />
        <Container58 />
      </div>
    </div>
  );
}

function Margin32() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.19px]" data-name="Margin" />;
}

function BackgroundBorderShadow16() {
  return (
    <div className="bg-[#63e452] content-stretch drop-shadow-[0px_4px_12px_rgba(99,228,82,0.3)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#63e452] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container57 />
      <Margin32 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexEnd6() {
  return (
    <div className="content-stretch flex flex-col items-end pt-[4.5px] relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-end">
      <BackgroundBorderShadow16 />
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin33() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[138.2px]" data-name="Container">
      <div className="h-[15.99px] mb-[-0.01px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin33 />
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <BackgroundBorder9 />
        <Container60 />
      </div>
    </div>
  );
}

function Margin34() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.2px]" data-name="Margin" />;
}

function BackgroundBorderShadow17() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container59 />
      <Margin34 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexStart8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4.5px] relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-start">
      <BackgroundBorderShadow17 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[15.5px] items-start mb-[-7.48px] pb-[27.47px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadowAlignFlexStart />
      <BackgroundBorderShadowAlignFlexEnd />
      <BackgroundBorderShadowAlignFlexEnd1 />
      <BackgroundBorderShadowAlignFlexStart1 />
      <BackgroundBorderShadowAlignFlexStart2 />
      <BackgroundBorderShadowAlignFlexStart3 />
      <BackgroundBorderShadowAlignFlexEnd2 />
      <BackgroundBorderShadowAlignFlexStart4 />
      <BackgroundBorderShadowAlignFlexStart5 />
      <BackgroundBorderShadowAlignFlexEnd3 />
      <BackgroundBorderShadowAlignFlexStart6 />
      <BackgroundBorderShadowAlignFlexEnd4 />
      <BackgroundBorderShadowAlignFlexStart7 />
      <BackgroundBorderShadowAlignFlexEnd5 />
      <BackgroundBorderShadowAlignFlexEnd6 />
      <BackgroundBorderShadowAlignFlexStart8 />
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin35() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[138.04px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin35 />
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <BackgroundBorder10 />
        <Container63 />
      </div>
    </div>
  );
}

function Margin36() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.36px]" data-name="Margin" />;
}

function BackgroundBorderShadow18() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container62 />
      <Margin36 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexStart9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-start">
      <BackgroundBorderShadow18 />
    </div>
  );
}

function OverlayBorder7() {
  return (
    <div className="bg-[rgba(3,45,66,0.1)] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(3,45,66,0.2)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin37() {
  return <div className="h-[14.5px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[124.84px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin37 />
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <OverlayBorder7 />
        <Container65 />
      </div>
    </div>
  );
}

function Margin38() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.36px]" data-name="Margin" />;
}

function BackgroundBorderShadow19() {
  return (
    <div className="bg-[#63e452] content-stretch drop-shadow-[0px_4px_12px_rgba(99,228,82,0.3)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#63e452] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container64 />
      <Margin38 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexEnd7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-end">
      <BackgroundBorderShadow19 />
    </div>
  );
}

function OverlayBorder8() {
  return (
    <div className="bg-[rgba(3,45,66,0.1)] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(3,45,66,0.2)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin39() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[137.63px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin39 />
    </div>
  );
}

function Container66() {
  return (
    <div className="mr-[-0.01px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <OverlayBorder8 />
        <Container67 />
      </div>
    </div>
  );
}

function Margin40() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.77px]" data-name="Margin" />;
}

function BackgroundBorderShadow20() {
  return (
    <div className="bg-[#63e452] content-stretch drop-shadow-[0px_4px_12px_rgba(99,228,82,0.3)] flex items-center justify-between pl-[12.8px] pr-[12.81px] py-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#63e452] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container66 />
      <Margin40 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexEnd8() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-end">
      <BackgroundBorderShadow20 />
    </div>
  );
}

function BackgroundBorder11() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin41() {
  return <div className="h-[14.5px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[126.64px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin41 />
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <BackgroundBorder11 />
        <Container69 />
      </div>
    </div>
  );
}

function Margin42() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.77px]" data-name="Margin" />;
}

function BackgroundBorderShadow21() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-between pl-[12.8px] pr-[12.81px] py-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container68 />
      <Margin42 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexStart10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-start">
      <BackgroundBorderShadow21 />
    </div>
  );
}

function BackgroundBorder12() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin43() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[138.05px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin43 />
    </div>
  );
}

function Container70() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <BackgroundBorder12 />
        <Container71 />
      </div>
    </div>
  );
}

function Margin44() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.35px]" data-name="Margin" />;
}

function BackgroundBorderShadow22() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container70 />
      <Margin44 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexStart11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-start">
      <BackgroundBorderShadow22 />
    </div>
  );
}

function BackgroundBorder13() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin45() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[138.21px]" data-name="Container">
      <div className="h-[15.99px] mb-[-0.01px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin45 />
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <BackgroundBorder13 />
        <Container73 />
      </div>
    </div>
  );
}

function Margin46() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.19px]" data-name="Margin" />;
}

function BackgroundBorderShadow23() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container72 />
      <Margin46 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexStart12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-start">
      <BackgroundBorderShadow23 />
    </div>
  );
}

function OverlayBorder9() {
  return (
    <div className="bg-[rgba(3,45,66,0.1)] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(3,45,66,0.2)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin47() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[137.63px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin47 />
    </div>
  );
}

function Container74() {
  return (
    <div className="mr-[-0.01px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <OverlayBorder9 />
        <Container75 />
      </div>
    </div>
  );
}

function Margin48() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.77px]" data-name="Margin" />;
}

function BackgroundBorderShadow24() {
  return (
    <div className="bg-[#63e452] content-stretch drop-shadow-[0px_4px_12px_rgba(99,228,82,0.3)] flex items-center justify-between pl-[12.8px] pr-[12.81px] py-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#63e452] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container74 />
      <Margin48 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexEnd9() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-end">
      <BackgroundBorderShadow24 />
    </div>
  );
}

function BackgroundBorder14() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin49() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[137.64px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin49 />
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <BackgroundBorder14 />
        <Container77 />
      </div>
    </div>
  );
}

function Margin50() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.76px]" data-name="Margin" />;
}

function BackgroundBorderShadow25() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container76 />
      <Margin50 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexStart13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-start">
      <BackgroundBorderShadow25 />
    </div>
  );
}

function BackgroundBorder15() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin51() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[138.04px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin51 />
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <BackgroundBorder15 />
        <Container79 />
      </div>
    </div>
  );
}

function Margin52() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.36px]" data-name="Margin" />;
}

function BackgroundBorderShadow26() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container78 />
      <Margin52 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexStart14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-start">
      <BackgroundBorderShadow26 />
    </div>
  );
}

function OverlayBorder10() {
  return (
    <div className="bg-[rgba(3,45,66,0.1)] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(3,45,66,0.2)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin53() {
  return <div className="h-[14.5px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[134.71px]" data-name="Container">
      <div className="h-[15.99px] mb-[-0.01px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin53 />
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <OverlayBorder10 />
        <Container81 />
      </div>
    </div>
  );
}

function Margin54() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.35px]" data-name="Margin" />;
}

function BackgroundBorderShadow27() {
  return (
    <div className="bg-[#63e452] content-stretch drop-shadow-[0px_4px_12px_rgba(99,228,82,0.3)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#63e452] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container80 />
      <Margin54 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexEnd10() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-end">
      <BackgroundBorderShadow27 />
    </div>
  );
}

function BackgroundBorder16() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin55() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[138.04px]" data-name="Container">
      <div className="h-[15.99px] mb-[-0.01px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin55 />
    </div>
  );
}

function Container82() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <BackgroundBorder16 />
        <Container83 />
      </div>
    </div>
  );
}

function Margin56() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.36px]" data-name="Margin" />;
}

function BackgroundBorderShadow28() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container82 />
      <Margin56 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexStart15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-start">
      <BackgroundBorderShadow28 />
    </div>
  );
}

function OverlayBorder11() {
  return (
    <div className="bg-[rgba(3,45,66,0.1)] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(3,45,66,0.2)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin57() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[138.21px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin57 />
    </div>
  );
}

function Container84() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <OverlayBorder11 />
        <Container85 />
      </div>
    </div>
  );
}

function Margin58() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.19px]" data-name="Margin" />;
}

function BackgroundBorderShadow29() {
  return (
    <div className="bg-[#63e452] content-stretch drop-shadow-[0px_4px_12px_rgba(99,228,82,0.3)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#63e452] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container84 />
      <Margin58 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexEnd11() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-end">
      <BackgroundBorderShadow29 />
    </div>
  );
}

function BackgroundBorder17() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin59() {
  return <div className="h-[14.5px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[121.7px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin59 />
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <BackgroundBorder17 />
        <Container87 />
      </div>
    </div>
  );
}

function Margin60() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.66px]" data-name="Margin" />;
}

function BackgroundBorderShadow30() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container86 />
      <Margin60 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexStart16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-start">
      <BackgroundBorderShadow30 />
    </div>
  );
}

function OverlayBorder12() {
  return (
    <div className="bg-[rgba(3,45,66,0.1)] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(3,45,66,0.2)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin61() {
  return <div className="h-[14.5px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[130.5px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin61 />
    </div>
  );
}

function Container88() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <OverlayBorder12 />
        <Container89 />
      </div>
    </div>
  );
}

function Margin62() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.2px]" data-name="Margin" />;
}

function BackgroundBorderShadow31() {
  return (
    <div className="bg-[#63e452] content-stretch drop-shadow-[0px_4px_12px_rgba(99,228,82,0.3)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#63e452] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container88 />
      <Margin62 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexEnd12() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-end">
      <BackgroundBorderShadow31 />
    </div>
  );
}

function OverlayBorder13() {
  return (
    <div className="bg-[rgba(3,45,66,0.1)] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(3,45,66,0.2)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin63() {
  return <div className="h-[14.5px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[115.36px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin63 />
    </div>
  );
}

function Container90() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <OverlayBorder13 />
        <Container91 />
      </div>
    </div>
  );
}

function Margin64() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.19px]" data-name="Margin" />;
}

function BackgroundBorderShadow32() {
  return (
    <div className="bg-[#63e452] content-stretch drop-shadow-[0px_4px_12px_rgba(99,228,82,0.3)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#63e452] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container90 />
      <Margin64 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexEnd13() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-end">
      <BackgroundBorderShadow32 />
    </div>
  );
}

function BackgroundBorder18() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Margin65() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Margin" />;
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[138.2px]" data-name="Container">
      <div className="h-[15.99px] relative shrink-0 w-full" data-name="Rectangle" />
      <Margin65 />
    </div>
  );
}

function Container92() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <BackgroundBorder18 />
        <Container93 />
      </div>
    </div>
  );
}

function Margin66() {
  return <div className="h-[13.5px] relative shrink-0 w-[30.2px]" data-name="Margin" />;
}

function BackgroundBorderShadow33() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-between p-[12.8px] relative rounded-[12px] shrink-0 w-[238px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container92 />
      <Margin66 />
    </div>
  );
}

function BackgroundBorderShadowAlignFlexStart17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background+Border+Shadow:align-flex-start">
      <BackgroundBorderShadow33 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pb-[20px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadowAlignFlexStart9 />
      <BackgroundBorderShadowAlignFlexEnd7 />
      <BackgroundBorderShadowAlignFlexEnd8 />
      <BackgroundBorderShadowAlignFlexStart10 />
      <BackgroundBorderShadowAlignFlexStart11 />
      <BackgroundBorderShadowAlignFlexStart12 />
      <BackgroundBorderShadowAlignFlexEnd9 />
      <BackgroundBorderShadowAlignFlexStart13 />
      <BackgroundBorderShadowAlignFlexStart14 />
      <BackgroundBorderShadowAlignFlexEnd10 />
      <BackgroundBorderShadowAlignFlexStart15 />
      <BackgroundBorderShadowAlignFlexEnd11 />
      <BackgroundBorderShadowAlignFlexStart16 />
      <BackgroundBorderShadowAlignFlexEnd12 />
      <BackgroundBorderShadowAlignFlexEnd13 />
      <BackgroundBorderShadowAlignFlexStart17 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7.49px] relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container61 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-715.72px_0_-1737.23px_0] items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_715.72px] mask-size-[100%_calc(100%-2452.95px)] max-w-[280px]" style={{ maskImage: `url("${imgContainer}")` }} data-name="Container">
      <Container20 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="flex-[1_0_0] max-w-[280px] min-h-px relative w-[280px]" data-name="Mask Group">
      <Container19 />
    </div>
  );
}

function Background1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px overflow-clip relative rounded-[12px]" style={{ backgroundImage: "linear-gradient(140.38154705213194deg, rgb(3, 45, 66) 0%, rgb(33, 98, 138) 50%, rgb(58, 69, 156) 100%)" }} data-name="Background">
      <MosaicBackground1 />
      <MaskGroup />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[250px] min-h-[250px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center min-h-[inherit] relative size-full">
        <Background1 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-sans font-medium font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[28px]">{`CSA & CIS - DF`}</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex flex-col gap-[11.175px] items-start pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Heading2 />
      <div className="relative shrink-0 size-[72px]" data-name="servicenow-certified-system-administrator-csa (1) 1">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[0.03%] max-w-none size-full top-[-0.06%]" src={imgServicenowCertifiedSystemAdministratorCsa11} />
        </div>
      </div>
      <div className="absolute left-[79.2px] size-[72px] top-[63.6px]" data-name="certified-implementation-specialist-data-foundation (1) 1">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCertifiedImplementationSpecialistDataFoundation11} />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="relative shrink-0 size-[10.664px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.6635" preserveAspectRatio="none" viewBox="0 0 10.664 10.6635" width="10.664">
        <g id="Group 22">
          <path d={svgPaths.p35e02400} fill="#032D42" id="Vector" />
          <path d={svgPaths.p18fa3100} fill="#032D42" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonViewCredential1() {
  const onOpen = useContext(CertContext);
  return (
    <button onClick={onOpen} aria-label="View ServiceNow Credential" className="absolute cursor-pointer hover:scale-105 transition-transform bg-white content-stretch flex items-center justify-center left-[276px] px-[7.668px] py-[4.793px] rounded-[4792.022px] top-[52.58px] border-none outline-none shadow-sm z-50 pointer-events-auto" data-name="Button - View Credential">
      <span className="sr-only">View ServiceNow Credential</span>
      <div aria-hidden className="absolute border-[#032d42] border-[0.479px] border-solid inset-0 pointer-events-none rounded-[4792.022px]" />
      <Group3 />
    </button>
  );
}

function Margin67() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <HorizontalBorder1 />
        <ButtonViewCredential1 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1({ children }: any) {
  return (
    <div className="bg-white flex-[1_0_0] h-[573px] min-w-px relative rounded-[12px]" data-name="Background+Border+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between px-[25px] py-[33px] relative size-full">
          <Margin2 />
          <div className="w-full flex-1 flex items-center justify-center relative z-10">
             {children || <Container18 />}
          </div>
          <Margin67 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Margin68() {
  return (
    <div className="relative shrink-0 w-[302px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <div className="h-[28.75px] relative shrink-0 w-[198.2px]" data-name="Oracle Logo - Download Free PNG 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[504.39%] left-[-8.46%] max-w-none top-[-203.95%] w-[116.91%]" src={imgOracleLogoDownloadFreePng1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute content-stretch flex flex-col items-start pb-[3.2px] pt-[8.8px] right-[12px] top-[8px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-bold font-bold justify-center leading-[0] relative shrink-0 text-[#f80000] text-[8px] tracking-[0.4px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[12px]">ORACLE</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-sans font-bold font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[-0.35px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[21px]">Oracle Cloud</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute flex items-center justify-center left-[21.2px] right-[21.2px] top-[66.87px]" style={{ containerType: "size" }}>
      <div className="flex-none h-[100cqh] w-[100cqw]">
        <div className="content-stretch flex flex-col gap-[2px] items-start opacity-30 relative w-full" data-name="Container">
          <Heading3 />
          <div className="h-[13.495px] relative shrink-0 w-full" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute flex items-center justify-center left-[21.2px] right-[21.2px] top-[-53.14px]" style={{ containerType: "size" }}>
      <div className="flex-none h-[100cqh] w-[100cqw]">
        <div className="content-stretch flex flex-col gap-[2.011px] items-start opacity-0 relative w-full" data-name="Container">
          <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3" />
          <div className="h-[13.495px] relative shrink-0 w-full" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-sans font-bold font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[-0.35px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[21px]">Verified</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(0,0,0,0.6)] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[13.5px]">Credential</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute flex items-center justify-center left-[21.2px] right-[21.2px] top-[-13.14px]" style={{ containerType: "size" }}>
      <div className="flex-none h-[100cqh] w-[100cqw]">
        <div className="content-stretch flex flex-col gap-[1.405px] items-start opacity-0 relative w-full" data-name="Container">
          <Heading4 />
          <Container100 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-sans font-bold font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[-0.35px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[21px]">OCI</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(0,0,0,0.6)] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[13.5px]">Cloud Technologies</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.4px] items-start left-[16px] right-[16px] top-[25.95px]" data-name="Container">
      <Heading5 />
      <Container102 />
    </div>
  );
}

function BackgroundHorizontalBorderShadow() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-[#f80000] border-solid border-t-[1.6px] h-[90px] left-[calc(50%+0.2px)] overflow-clip rounded-[10px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.12)] top-[calc(50%-54px)] w-[240px]" data-name="Background+HorizontalBorder+Shadow">
      <Container96 />
      <Container97 />
      <Container98 />
      <Container99 />
      <Container101 />
    </div>
  );
}

function Mosaic() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[230px]" data-name="Mosaic">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[287.02%] left-0 max-w-none top-[-93.51%] w-full" src={imgMosaicBackground} />
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start mix-blend-multiply opacity-15" data-name="Container">
      <Mosaic />
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d={svgPaths.p3c790780} id="Vector" stroke="#D43833" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2a9b1a40} id="Vector_2" stroke="#D43833" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p294b9f80} id="Vector_3" stroke="#D43833" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Container">
      <div className="absolute bg-white inset-0 rounded-[26843500px]" data-name="Background" />
      <Svg11 />
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_8)" id="SVG">
          <path d={svgPaths.pe364a00} id="Vector" stroke="#D43833" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_0_8">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Container">
      <div className="absolute bg-white inset-0 rounded-[26843500px]" data-name="Background" />
      <Svg12 />
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_15)" id="SVG">
          <path d={svgPaths.p5240900} id="Vector" stroke="#D43833" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="#D43833" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_0_15">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Container">
      <div className="absolute bg-white inset-0 rounded-[26843500px]" data-name="Background" />
      <Svg13 />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute flex inset-[-1.8px] items-center justify-center" style={{ containerType: "size" }}>
      <div className="flex-none h-[100cqh] w-[100cqw]">
        <div className="bg-white relative rounded-[26843500px] size-full" data-name="Background">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[-0.32px_-0.18px_-0.05px_-0.18px] rounded-[26843500px] shadow-[0px_0px_0px_4px_rgba(248,0,0,0.5)]" data-name="Overlay+Shadow" />
        </div>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d={svgPaths.p3edb4f00} id="Vector" stroke="#F80000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Container">
      <Background3 />
      <Svg14 />
    </div>
  );
}

function BackgroundShadow8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#ffd6d6] content-stretch flex gap-[12px] h-[52px] items-center justify-center left-[calc(50%+0.2px)] overflow-clip rounded-[26843500px] shadow-[0px_2px_8px_0px_rgba(248,0,0,0.2)] top-[calc(50%+73px)] w-[230px]" data-name="Background+Shadow">
      <Container103 />
      <Container104 />
      <Container105 />
      <Container106 />
      <Container107 />
    </div>
  );
}

function Container95() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] border-[#ffb3b3] border-dashed border-l-[1.6px] h-[56px] left-[calc(50%+0.2px)] shadow-[0px_0px_12px_0px_rgba(248,0,0,0.3)] top-[calc(50%+19px)] w-[2px]" data-name="Vertical Divider" />
      <BackgroundHorizontalBorderShadow />
      <BackgroundShadow8 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#fff8f8] content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px overflow-clip relative rounded-[12px]" data-name="Background">
      <Container95 />
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[250px] min-h-[250px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center min-h-[inherit] relative size-full">
        <Background2 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-sans font-medium font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[28px]">Generative AI Professional</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex flex-col gap-[11.175px] items-start pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Heading6 />
      <div className="relative shrink-0 size-[72px]" data-name="image 4">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-50%] max-w-none top-0 w-[200.96%]" src={imgImage4} />
        </div>
      </div>
      <div className="absolute h-[74px] left-[81px] top-[64.58px] w-[71.587px]" data-name="image 5">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-53.56%] max-w-none top-0 w-[206.74%]" src={imgImage5} />
        </div>
      </div>
      <div className="absolute h-[74px] left-[162px] top-[64.18px] w-[72.123px]" data-name="image 6">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-52.4%] max-w-none top-[-0.09%] w-[205.2%]" src={imgImage6} />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="relative shrink-0 size-[10.664px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.6635" preserveAspectRatio="none" viewBox="0 0 10.664 10.6635" width="10.664">
        <g id="Group 22">
          <path d={svgPaths.p35e02400} fill="#C74634" id="Vector" />
          <path d={svgPaths.p18fa3100} fill="#C74634" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonViewCredential2() {
  const onOpen = useContext(CertContext);
  return (
    <button onClick={onOpen} aria-label="View Oracle Credential" className="absolute cursor-pointer hover:scale-105 transition-transform bg-white content-stretch flex items-center justify-center left-[276px] px-[7.668px] py-[4.793px] rounded-[4792.022px] top-[52.58px] border-none outline-none shadow-sm z-50 pointer-events-auto" data-name="Button - View Credential">
      <span className="sr-only">View Oracle Credential</span>
      <div aria-hidden className="absolute border-[#c74634] border-[0.479px] border-solid inset-0 pointer-events-none rounded-[4792.022px]" />
      <Group4 />
    </button>
  );
}

function Margin69() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <HorizontalBorder2 />
        <ButtonViewCredential2 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow34({ children }: any) {
  return (
    <div className="bg-white flex-[1_0_0] h-[573px] min-w-px relative rounded-[12px]" data-name="Background+Border+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between px-[25px] py-[33px] relative size-full">
          <Margin68 />
          <div className="w-full flex-1 flex items-center justify-center relative z-10">
             {children || <Container94 />}
          </div>
          <Margin69 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow34 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[1152px] px-[24px] relative shrink-0 w-[1152px]" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#faf7f3] content-stretch flex flex-col items-center justify-center py-[96px] relative size-full" data-name="Section">
      <Container />
    </div>
  );
}

export function AwsCard({ children, onOpenCertificates }: any) {
  return (
    <CertContext.Provider value={onOpenCertificates}>
      <BackgroundBorderShadow>{children}</BackgroundBorderShadow>
    </CertContext.Provider>
  );
}

export function ServicenowCard({ children, onOpenCertificates }: any) {
  return (
    <CertContext.Provider value={onOpenCertificates}>
      <BackgroundBorderShadow1>{children}</BackgroundBorderShadow1>
    </CertContext.Provider>
  );
}

export function OracleCard({ children, onOpenCertificates }: any) {
  return (
    <CertContext.Provider value={onOpenCertificates}>
      <BackgroundBorderShadow34>{children}</BackgroundBorderShadow34>
    </CertContext.Provider>
  );
}