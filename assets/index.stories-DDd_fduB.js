import{j as c}from"./emotion-react-jsx-runtime.browser.esm-B1l5gt7V.js";import{r as u}from"./index-DRjF_FHU.js";import{S as s}from"./index-Dgg20c5c.js";import"./jsx-runtime-DR9Q75dM.js";const f={title:"Components/Select",component:s,tags:["autodocs"]},p=[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],e=()=>{const[l,r]=u.useState();return c(s,{options:p,placeholder:"탄생년도(필수)",selectedValue:l,onChange:n=>r(n)})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = useState<{
    value: string;
    label: string;
  }>();
  return <Select options={OPTIONS} placeholder="탄생년도(필수)" selectedValue={selectedValue} onChange={option => setSelectedValue(option)} />;
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,f as default};
