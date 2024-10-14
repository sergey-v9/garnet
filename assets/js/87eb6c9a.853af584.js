"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2474],{9740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var o=n(4848),i=n(8453);const s={id:"objects",sidebar_label:"Objects",title:"Objects"},r="Server-Side Object Extensions",d={id:"extensions/objects",title:"Objects",description:"Garnet offers different ways to extend its functionality, one of them by adding your own implementation of a Custom Object; similar to what a Set, List or a Sorted Set offers but using your own type of object and custom commmands functionality with the C# language.",source:"@site/docs/extensions/objects.md",sourceDirName:"extensions",slug:"/extensions/objects",permalink:"/garnet/docs/extensions/objects",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/garnet/tree/main/website/docs/extensions/objects.md",tags:[],version:"current",frontMatter:{id:"objects",sidebar_label:"Objects",title:"Objects"},sidebar:"garnetDocSidebar",previous:{title:"Raw Strings",permalink:"/garnet/docs/extensions/raw-strings"},next:{title:"Transactions",permalink:"/garnet/docs/extensions/transactions"}},c={},a=[{value:"Developing custom server side object command",id:"developing-custom-server-side-object-command",level:3}];function l(e){const t={admonition:"admonition",br:"br",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"server-side-object-extensions",children:"Server-Side Object Extensions"})}),"\n",(0,o.jsx)(t.p,{children:"Garnet offers different ways to extend its functionality, one of them by adding your own implementation of a Custom Object; similar to what a Set, List or a Sorted Set offers but using your own type of object and custom commmands functionality with the C# language."}),"\n",(0,o.jsx)(t.p,{children:"In this document we'll explain the implementation of a new object type, based on the Dictionary type of C#, then we'll add some custom commands that will use this new object type."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Implementing a Custom Object"})}),"\n",(0,o.jsxs)(t.p,{children:["In order to add a new object type, you first need to implement a new class that inherits from ",(0,o.jsx)(t.code,{children:"CustomObjectBase"})," class. This class contains essential methods to manage the basic functionality of an object in Garnet."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Adding a Factory class"})}),"\n",(0,o.jsxs)(t.p,{children:["Once the new Custom Object class implementation has been added, it also requires a class that will manage the creation of the new Object type, this class must derive from ",(0,o.jsx)(t.code,{children:"CustomObjectFactory"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"developing-custom-server-side-object-command",children:"Developing custom server side object command"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"CustomObjectFunctions"})," is the base class for all custom object commands. To develop a new one, this class has to be extended and then include the custom logic. There are three  methods to be implemented in a new custom object command:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"NeedInitialUpdate(ReadOnlyMemory<byte> key, ReadOnlySpan<byte> input, ref (IMemoryOwner<byte>, int) output)"}),(0,o.jsx)(t.br,{}),"\n","The ",(0,o.jsx)(t.code,{children:"NeedInitialUpdate"})," determines whether a new record must be created or not given the key for the record (",(0,o.jsx)(t.code,{children:"key"}),"), the user input (",(0,o.jsx)(t.code,{children:"input"}),") to be used for computing the value (",(0,o.jsx)(t.code,{children:"value"}),") for the new record. If this method returns true, a new record is created otherwise not.\\"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Reader(ReadOnlyMemory<byte> key, ReadOnlySpan<byte> input, IGarnetObject value, ref (IMemoryOwner<byte>, int) output, ref ReadInfo readInfo);"}),(0,o.jsx)(t.br,{}),"\n","The ",(0,o.jsx)(t.code,{children:"Reader"})," method performs a record read, given the key for the record to be read (",(0,o.jsx)(t.code,{children:"key"}),"), the user input for computing ",(0,o.jsx)(t.code,{children:"output"})," from ",(0,o.jsx)(t.code,{children:"value"}),". The ",(0,o.jsx)(t.code,{children:"readInfo"})," helps control whether a record needs to be expired as part of the read operation using the ",(0,o.jsx)(t.code,{children:"ReadAction"})," option. If a command is meant for updating or upserting records, this method need not be overriden as the default implementation is to throw ",(0,o.jsx)(t.code,{children:"NotImplementedException"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Updater(ReadOnlyMemory<byte> key, ReadOnlySpan<byte> input, IGarnetObject value, ref (IMemoryOwner<byte>, int) output, ref RMWInfo rmwInfo)"}),(0,o.jsx)(t.br,{}),"\n","The ",(0,o.jsx)(t.code,{children:"Updater"})," method makes an update for RMW or upsert, given the key (",(0,o.jsx)(t.code,{children:"key"}),"), the given input (",(0,o.jsx)(t.code,{children:"input"}),"), the resulting value to be inserted (",(0,o.jsx)(t.code,{children:"value"}),"), the location where the result of the ",(0,o.jsx)(t.code,{children:"input"})," operation on ",(0,o.jsx)(t.code,{children:"value"})," is to be copied (",(0,o.jsx)(t.code,{children:"output"}),") and the reference for the record info for this record (used for locking) (",(0,o.jsx)(t.code,{children:"rmwInfo"}),"). If a command is meant for a pure readonly operation, this method need not be overriden as the default implementation is to throw ",(0,o.jsx)(t.code,{children:"NotImplementedException"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"There is an optional method available, if needed:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"InitialUpdater(ReadOnlyMemory<byte> key, ReadOnlySpan<byte> input, IGarnetObject value, ref (IMemoryOwner<byte>, int) output, ref RMWInfo rmwInfo)"}),(0,o.jsx)(t.br,{}),"\n","The ",(0,o.jsx)(t.code,{children:"InitialUpdater"})," is available to be overriden if any specialized processing is needed when the object is created initially. Otherwise, the default implementation of this method invokes the ",(0,o.jsx)(t.code,{children:"Updater"})," method."]}),"\n"]}),"\n",(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsx)(t.mdxAdmonitionTitle,{}),(0,o.jsx)(t.p,{children:"As a reference of an implementation of a Custom Object type, see the example in GarnetServer\\Extensions\\MyDictObject.cs. Commands that operate on this object are available in MyDictSet.cs and MyDictGet.cs."})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var o=n(6540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);