"use strict";(self.webpackChunkcoolcats_ui_components=self.webpackChunkcoolcats_ui_components||[]).push([[758],{"./src/stories/Header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,WithChildren:()=>WithChildren,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Header_stories});var react=__webpack_require__("./node_modules/react/index.js"),Styled=__webpack_require__("./src/Styled.tsx"),constants=__webpack_require__("./src/constants.ts");const IconButton=Styled.Z.button`
  font-family: var(--cc-default-font);
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--cc-color-white);
  text-align: center;
  display: grid;
  justify-items: center;
  cursor: pointer;

  > * {
    display: flex;
    height: 31px;
    width: 31px;
    align-content: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${({active})=>active?"var(--cc-color-yellow)":"var(--cc-color-bluecat)"};
    margin-bottom: 6px;

    div,
    svg {
      height: 60%;
      width: 60%;
    }
  }

  &[title="Close Menu"],
  &[title="Open Menu"] {
    width: 37px;

    i {
      background-color: var(--cc-color-white);
    }
  }
`,src_IconButton=IconButton;try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/IconButton/index.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/IconButton/index.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}var Icon=__webpack_require__("./src/Icon/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledHeader=Styled.Z.header`
  height: var(--cc-mobile-header-height);
  background-color: var(--cc-color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${constants.Uh.laptop} {
    height: var(--cc-desktop-header-height);
  }
`,StyledHeaderLogo=Styled.Z.div`
  position: relative;
  z-index: 2;
  img {
    height: 40px;
    display: block;
    ${constants.Uh.laptop} {
      height: 61px;
    }
  }

  a {
    display: flex;
    transition: 0.24s ease;

    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }
`,UserMenuNav=Styled.Z.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  width: 100%;
  height: 100%;
  gap: var(--cc-gap);
  position: absolute;
  z-index: ${({visible})=>visible?"3":"1"};

  > button {
    right: 4px;
    position: absolute;

    &[title="Close Menu"],
    &[title="Open Menu"] {
      ${constants.Uh.laptop} {
        display: none;
      }
    }
  }

  ${constants.Uh.laptop} {
    right: calc(var(--cc-gap) * 2);
    gap: calc(var(--cc-gap) * 2);
    padding: var(--cc-gap);
    padding-right: 0;
    width: auto;
  }
`,UserMenuNavButtons=Styled.Z.div`
  display: flex;
  align-items: center;
  gap: var(--cc-gap);
  position: absolute;
  background-color: var(--cc-color-primary);
  padding-left: 4px;
  width: 100%;
  height: 100%;
  opacity: ${({visible})=>visible?"1":"0"};
  pointer-events: ${({visible})=>visible?"all":"none"};

  ${constants.Uh.mobileL} {
    justify-content: center;
  }

  ${constants.Uh.laptop} {
    justify-content: center;
    position: static;
    width: auto;
  }

  ${constants.Uh.laptop} {
    opacity: 1;
    pointer-events: all;
  }
`,Header=(0,react.forwardRef)(((props,ref)=>{const[visible,setVisible]=(0,react.useState)(!1),{children,icons,menuClickAction}=props,isTwoChildren=Array.isArray(children)&&2===children.length;return(0,jsx_runtime.jsxs)(StyledHeader,{ref,children:[!isTwoChildren&&(0,jsx_runtime.jsx)(StyledHeaderLogo,{children:children||null}),isTwoChildren&&(0,jsx_runtime.jsx)(StyledHeaderLogo,{children:children[0]}),(0,jsx_runtime.jsxs)(UserMenuNav,{visible,children:[(0,jsx_runtime.jsxs)(UserMenuNavButtons,{visible,children:[(icons||[])?.map(((icon,i)=>(0,jsx_runtime.jsxs)(src_IconButton,{title:icon.title,active:icon.active,onClick:icon.clickAction,children:[(0,jsx_runtime.jsx)("i",{children:icon.icon}),icon.label||icon.title]},i))),isTwoChildren&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children[1]})]}),((icons||[]).length>0||isTwoChildren||menuClickAction)&&(0,jsx_runtime.jsxs)(src_IconButton,{onClick:e=>{setVisible((v=>!v)),menuClickAction&&menuClickAction(e)},title:visible?"Close Menu":"Open Menu",children:[(0,jsx_runtime.jsx)("i",{children:(0,jsx_runtime.jsx)(Icon.Oq,{open:visible})}),visible?"Close":"Menu"]})]})]})})),src_Header=Header;try{UserMenuNav.displayName="UserMenuNav",UserMenuNav.__docgenInfo={description:"",displayName:"UserMenuNav",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLElement | null) => void) | RefObject<HTMLElement> | null"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Header/index.tsx#UserMenuNav"]={docgenInfo:UserMenuNav.__docgenInfo,name:"UserMenuNav",path:"src/Header/index.tsx#UserMenuNav"})}catch(__react_docgen_typescript_loader_error){}try{UserMenuNavButtons.displayName="UserMenuNavButtons",UserMenuNavButtons.__docgenInfo={description:"",displayName:"UserMenuNavButtons",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Header/index.tsx#UserMenuNavButtons"]={docgenInfo:UserMenuNavButtons.__docgenInfo,name:"UserMenuNavButtons",path:"src/Header/index.tsx#UserMenuNavButtons"})}catch(__react_docgen_typescript_loader_error){}try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{icons:{defaultValue:null,description:"",name:"icons",required:!1,type:{name:"{ title: string; label?: string; icon: ReactElement<any, string | JSXElementConstructor<any>>; active?: boolean; clickAction: MouseEventHandler<...>; }[] | undefined"}},menuClickAction:{defaultValue:null,description:"",name:"menuClickAction",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Header/index.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/Header/index.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}const Header_stories={title:"Header",component:src_Header},Template=()=>(0,jsx_runtime.jsx)(src_Header,{children:(0,jsx_runtime.jsx)("img",{src:"logo-with-text.svg"})});Template.displayName="Template";const Basic=Template.bind({}),Template2=()=>(0,jsx_runtime.jsx)(src_Header,{icons:[{clickAction:e=>alert("Test"),icon:(0,jsx_runtime.jsx)(Icon.T8,{}),title:"Meowpad"},{clickAction:e=>alert("Test"),icon:(0,jsx_runtime.jsx)(Icon.QQ,{}),title:"Journeys"},{clickAction:e=>alert("Test"),icon:(0,jsx_runtime.jsx)(Icon.o,{}),title:"Wallet",active:!0}],children:(0,jsx_runtime.jsx)("img",{src:"logo-with-text.svg"})});Template2.displayName="Template2";const WithIcons=Template2.bind({}),Template3=()=>(0,jsx_runtime.jsxs)(src_Header,{icons:[{clickAction:e=>alert("Test"),icon:(0,jsx_runtime.jsx)(Icon.T8,{}),title:"Meowpad"}],children:[(0,jsx_runtime.jsx)("a",{href:"https://coolcats.com",children:(0,jsx_runtime.jsx)("img",{src:"logo-with-text.svg"})}),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(src_IconButton,{children:[(0,jsx_runtime.jsx)("i",{children:(0,jsx_runtime.jsx)(Icon.QQ,{})}),"Journeys"]}),(0,jsx_runtime.jsxs)(src_IconButton,{active:!0,children:[(0,jsx_runtime.jsx)("i",{children:(0,jsx_runtime.jsx)(Icon.o,{})}),"Wallet"]})]})]});Template3.displayName="Template3";const WithChildren=Template3.bind({});Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"() => <Header><img src='logo-with-text.svg' /></Header>",...Basic.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:"() => {\n  return <Header icons={[{\n    clickAction: e => (alert('Test') as any),\n    icon: <MeowpadIcon />,\n    title: 'Meowpad'\n  }, {\n    clickAction: e => (alert('Test') as any),\n    icon: <JourneysIcon />,\n    title: 'Journeys'\n  }, {\n    clickAction: e => (alert('Test') as any),\n    icon: <WalletIcon />,\n    title: 'Wallet',\n    active: true\n  }]}>\n      <img src='logo-with-text.svg' />\n    </Header>;\n}",...WithIcons.parameters?.docs?.source}}},WithChildren.parameters={...WithChildren.parameters,docs:{...WithChildren.parameters?.docs,source:{originalSource:"() => {\n  return <Header icons={[{\n    clickAction: e => (alert('Test') as any),\n    icon: <MeowpadIcon />,\n    title: 'Meowpad'\n  }]}>\n      <a href='https://coolcats.com'>\n        <img src='logo-with-text.svg' />\n      </a>\n      <>\n        <IconButton>\n          <i><JourneysIcon /></i>\n          Journeys\n        </IconButton>\n        <IconButton active>\n          <i><WalletIcon /></i>\n          Wallet\n        </IconButton>\n      </>\n    </Header>;\n}",...WithChildren.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","WithIcons","WithChildren"]},"./src/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CV:()=>CoolCatsUITheme,Uh:()=>device});const breakpoints_mobileM=375,breakpoints_mobileL=425,breakpoints_sitecontent=600,breakpoints_tablet=768,breakpoints_laptop=1024,breakpoints_desktop=1321,device={mobileS:`@media screen and (min-width: ${320}px)`,mobileM:`@media screen and (min-width: ${breakpoints_mobileM}px)`,below_mobileM:`@media screen and (max-width: ${breakpoints_mobileM}px)`,mobileL:`@media screen and (min-width: ${breakpoints_mobileL}px)`,mobileLandscape:`@media screen and (orientation:landscape) and (max-width: ${breakpoints_tablet}px)`,tabletLandscape:`@media screen and (orientation:landscape) and (max-width: ${breakpoints_laptop}px)`,below_mobileL:`@media screen and (max-width: ${breakpoints_mobileL}px)`,sitecontent:`@media screen and (min-width: ${breakpoints_sitecontent}px)`,below_sitecontent:`@media screen and (max-width: ${breakpoints_sitecontent}px)`,tablet:`@media screen and (min-width: ${breakpoints_tablet}px)`,below_tablet:`@media screen and (max-width: ${breakpoints_tablet}px)`,laptop:`@media screen and (min-width: ${breakpoints_laptop}px)`,laptopM:`@media screen and (min-width: ${1200}px)`,below_laptop:`@media screen and (max-width: ${breakpoints_laptop}px)`,below_desktop:`@media screen and (max-width: ${breakpoints_desktop}px)`,desktop:`@media screen and (min-width: ${breakpoints_desktop}px)`,laptopL:`@media screen and (min-width: ${1440}px)`,desktopL:`@media screen and (min-width: ${2560}px)`,retina:"@media only screen and (-webkit-min-device-pixel-ratio : 1.5), only screen and (min-device-pixel-ratio : 1.5)",retinaLaptop:`\n    @media \n    only screen and (-webkit-min-device-pixel-ratio : 1.5) and (min-width: ${breakpoints_laptop}px),\n    only screen and (min-device-pixel-ratio : 1.5) and (min-width: ${breakpoints_laptop}px)`,retinaDesktop:`\n    @media \n    only screen and (-webkit-min-device-pixel-ratio : 1.5) and (min-width: ${breakpoints_desktop}px),\n    only screen and (min-device-pixel-ratio : 1.5) and (min-width: ${breakpoints_desktop}px)`};let CoolCatsUITheme=function(CoolCatsUITheme){return CoolCatsUITheme.PRIMARY="PRIMARY",CoolCatsUITheme.YELLOW="YELLOW",CoolCatsUITheme.BLUECAT="BLUECAT",CoolCatsUITheme.JORED="JORED",CoolCatsUITheme.ARDIGREY="ARDIGREY",CoolCatsUITheme.WHITE="WHITE",CoolCatsUITheme}({})}}]);
//# sourceMappingURL=stories-Header-stories.b004677d.iframe.bundle.js.map