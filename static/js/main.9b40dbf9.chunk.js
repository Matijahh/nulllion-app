(this["webpackJsonpnullion-app"]=this["webpackJsonpnullion-app"]||[]).push([[0],{100:function(e,a,t){e.exports=t(125)},105:function(e,a,t){},106:function(e,a,t){},125:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(59),i=t(46),c=t(73),m={order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag","path","subdomain"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",lookupFromPathIndex:0,lookupFromSubdomainIndex:0,caches:["localStorage","cookie"],excludeCacheFor:["cimode"],cookieMinutes:10,cookieDomain:"myDomain",htmlTag:document.documentElement,cookieOptions:{path:"/",sameSite:"strict"}};r.a.use(i.e).use(c.a).init({resources:{en:{translation:{home:"Home",about:"About Us",contact:"Contact Us"}},fr:{translation:{home:"Accueil",about:"\xc0 propos de nous",contact:"Nous contacter"}},sr:{translation:{home:"Po\u010detna",about:"O Nama",contact:"Kontaktiraj Nas"}},jp:{translation:{home:"\u30db\u30fc\u30e0",about:"\u79c1\u305f\u3061\u306b\u95a2\u3057\u3066\u306f",contact:"\u304a\u554f\u3044\u5408\u308f\u305b"}}},detection:m,keySeparator:!1,interpolation:{escapeValue:!1}});r.a;var s=t(7),o=t.n(s),u=(t(105),t(106),t(60)),d=t(164),E=t(35),h=t(168),p=t(169),v=t(173),g=t(78),N=t.n(g),b=t(172),w=t(91),f=t(167),k=t(177),y=t(179),x=t(170),F=t(178),L=t(41),I=t(12),O=t(76),S=t.n(O),j=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),C=Object(I.e)((function(e){var a=e.history,t=l.a.useState(null),n=Object(u.a)(t,2),r=n[0],i=n[1],c=l.a.useState(""),m=Object(u.a)(c,2),s=m[0],o=m[1],d=j(),g=Object(E.a)(),I=Object(f.a)(g.breakpoints.down("xs")),O=Boolean(r),C=Object(F.a)(),T=C.t,H=C.i18n,W=function(e){a.push(e),i(null)};return l.a.createElement("div",{className:d.root},l.a.createElement(h.a,{position:"static",className:"nav-bar"},l.a.createElement(p.a,null,l.a.createElement("div",{className:"logo-div"},l.a.createElement("img",{src:S.a,alt:"",className:"logo"})),l.a.createElement("div",{className:"select-lang"},l.a.createElement(x.a,{variant:"outlined",className:"form-control white"},l.a.createElement(y.a,{id:"demo-simple-select-outlined",className:"white"},"LANG"),l.a.createElement(k.a,{id:"demo-simple-select-outlined",value:s,onChange:function(e){H.changeLanguage(e.target.value),o(e.target.value)},label:"Language",className:"select white"},l.a.createElement(b.a,{value:"en",className:"white"},l.a.createElement("em",null,"ENG")),l.a.createElement(b.a,{value:"fr",className:"white"},"FRA"),l.a.createElement(b.a,{value:"sr",className:"white"},"SRB"),l.a.createElement(b.a,{value:"jp",className:"white"},"JPN")))),l.a.createElement("div",null,I?l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{edge:"start",className:d.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){i(e.currentTarget)}},l.a.createElement(N.a,null)),l.a.createElement(w.a,{id:"menu-appbar",anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:O,onClose:function(){return i(null)}},l.a.createElement(b.a,{onClick:function(){return W("/")}},T("home")),l.a.createElement(b.a,{onClick:function(){return W("/about")}},T("about")),l.a.createElement(b.a,{onClick:function(){return W("/contact")}},T("contact")))):l.a.createElement("div",{className:"nav-links"},l.a.createElement(L.b,{to:"/",exact:!0,className:"nav-link"},T("home")),l.a.createElement(L.b,{to:"/about",className:"nav-link"},T("about")),l.a.createElement(L.b,{to:"/contact",className:"nav-link"},T("contact")))))))})),T=t(36),H=(t(119),t(80)),W=t(54),A=t(171),M=t(128),P=t(174),G=t(175),D=t(34),B=t.n(D),Y=t(58),R=t.n(Y),z=t(176),q=t(81),V=t.n(q),J=t(82),U=t.n(J),K=t(83),Q=t.n(K),$=t(84),_=t.n($),X=t(85),Z=t.n(X),ee=t(86),ae=t.n(ee),te=t(87),ne=t.n(te),le=t(53),re=(t(124),function(){var e=function(){le.b.error("Error: No link found.",{position:le.b.POSITION.BOTTOM_RIGHT})};return l.a.createElement("div",{className:"carousel-container"},l.a.createElement(T.a,{queries:{small:"(max-width: 699px)",medium:"(min-width: 700px) and (max-width: 1399px)",large:"(min-width: 1400px)"}},(function(a){return l.a.createElement(n.Fragment,null,l.a.createElement(le.a,{autoClose:4e3}),l.a.createElement(H.Carousel,{className:"carousel",infiniteLoop:"true",autoPlay:"true"},l.a.createElement("div",null,l.a.createElement("img",{src:U.a})),l.a.createElement("div",null,l.a.createElement("img",{src:Q.a})),l.a.createElement("div",null,l.a.createElement("img",{src:_.a})),l.a.createElement("div",null,l.a.createElement("img",{src:Z.a})),l.a.createElement("div",null,l.a.createElement("img",{src:V.a}))),l.a.createElement("div",{className:"landing-container health-insurance"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("img",{src:ae.a})),l.a.createElement("div",{className:"col-md-6 health-paragraph"},a.small&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h6",className:"title"},"Health Insurance"),l.a.createElement(W.a,{variant:"body2",className:"subtitle"},"You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.")),a.medium&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h4",className:"title"},"Health Insurance"),l.a.createElement(W.a,{variant:"subtitle2",className:"subtitle"},"You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.")),a.large&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h2",className:"title"},"Health Insurance"),l.a.createElement(W.a,{variant:"h6",className:"subtitle"},"You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.")),l.a.createElement(A.a,{className:"list"},l.a.createElement(M.a,null,l.a.createElement(P.a,null,l.a.createElement(B.a,null)),l.a.createElement(G.a,{primary:"Digital Marketing Solutions for Tomorrow",className:"list-text"})),l.a.createElement(M.a,null,l.a.createElement(P.a,null,l.a.createElement(B.a,null)),l.a.createElement(G.a,{primary:"Our Talented & Experienced Marketing Agency",className:"list-text"})),l.a.createElement(M.a,null,l.a.createElement(P.a,null,l.a.createElement(B.a,null)),l.a.createElement(G.a,{primary:"Create your own skin to match your brand",className:"list-text"}))),l.a.createElement(z.a,{variant:"contained",color:"primary",endIcon:l.a.createElement(R.a,null),className:"btn",onClick:e},"Read More")))),l.a.createElement("div",{className:"container landing-container investment-plans"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 paragraph invest-paragraph"},a.small&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h6",className:"title"},"Investment Plans"),l.a.createElement(W.a,{variant:"body2",className:"subtitle"},"You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.")),a.medium&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h4",className:"title"},"Investment Plans"),l.a.createElement(W.a,{variant:"subtitle2",className:"subtitle"},"You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.")),a.large&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h2",className:"title"},"Investment Plans"),l.a.createElement(W.a,{variant:"h6",className:"subtitle"},"You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.")),l.a.createElement(A.a,{className:"list"},l.a.createElement(M.a,null,l.a.createElement(P.a,null,l.a.createElement(B.a,null)),l.a.createElement(G.a,{primary:"Digital Marketing Solutions for Tomorrow",className:"list-text"})),l.a.createElement(M.a,null,l.a.createElement(P.a,null,l.a.createElement(B.a,null)),l.a.createElement(G.a,{primary:"Our Talented & Experienced Marketing Agency",className:"list-text"})),l.a.createElement(M.a,null,l.a.createElement(P.a,null,l.a.createElement(B.a,null)),l.a.createElement(G.a,{primary:"Create your own skin to match your brand",className:"list-text"}))),l.a.createElement(z.a,{variant:"contained",color:"primary",endIcon:l.a.createElement(R.a,null),className:"btn",onClick:e},"Read More")),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("img",{src:ne.a})))))})))}),ie=t(21),ce=t.n(ie),me=function(){return l.a.createElement("div",{className:"about-container"},l.a.createElement(T.a,{queries:{small:"(max-width: 699px)",medium:"(min-width: 700px) and (max-width: 1399px)",large:"(min-width: 1400px)"}},(function(e){return l.a.createElement(n.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 about-us"},e.small&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h5",className:"title"},"How It Work?"),l.a.createElement(W.a,{variant:"subtitle2",className:"subtitle"},"Start working with ",l.a.createElement("span",null,"Landrick")," that can provide everything you need to generate awareness, drive traffic, connect.")),e.medium&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h3",className:"title"},"How It Work?"),l.a.createElement(W.a,{variant:"subtitle1",className:"subtitle"},"Start working with ",l.a.createElement("span",null,"Landrick")," that can provide everything you need to generate awareness, drive traffic, connect.")),e.large&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h2",className:"title"},"How It Work?"),l.a.createElement(W.a,{variant:"h5",className:"subtitle"},"Start working with ",l.a.createElement("span",null,"Landrick")," that can provide everything you need to generate awareness, drive traffic, connect.")))),l.a.createElement("div",{className:"about-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 list-item"},e.small&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"subtitle1",className:"list-title"},l.a.createElement(ce.a,{className:"icon"}),"How Our ",l.a.createElement("span",null,"Landrick")," work?"),l.a.createElement(W.a,{variant:"body2",className:"subtitle"},"Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and receptions in texts.")),e.medium&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h6",className:"list-title"},l.a.createElement(ce.a,{className:"icon"}),"How Our ",l.a.createElement("span",null,"Landrick")," work?"),l.a.createElement(W.a,{variant:"subtitle2",className:"subtitle"},"Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and receptions in texts.")),e.large&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h4",className:"list-title"},l.a.createElement(ce.a,{className:"icon"}),"How Our ",l.a.createElement("span",null,"Landrick")," work?"),l.a.createElement(W.a,{variant:"h6",className:"subtitle"},"Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and receptions in texts."))),l.a.createElement("div",{className:"col-md-6 list-item"},e.small&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"subtitle1",className:"list-title"},l.a.createElement(ce.a,{className:"icon"}),"What is the main process open account?"),l.a.createElement(W.a,{variant:"body2",className:"subtitle"},"If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact.")),e.medium&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h6",className:"list-title"},l.a.createElement(ce.a,{className:"icon"}),"What is the main process open account?"),l.a.createElement(W.a,{variant:"subtitle2",className:"subtitle"},"If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact.")),e.large&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h4",className:"list-title"},l.a.createElement(ce.a,{className:"icon"}),"What is the main process open account?"),l.a.createElement(W.a,{variant:"h6",className:"subtitle"},"If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact."))),l.a.createElement("div",{className:"col-md-6 list-item bottom"},e.small&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"subtitle1",className:"list-title"},l.a.createElement(ce.a,{className:"icon"}),"How to make unlimited data entry?"),l.a.createElement(W.a,{variant:"body2",className:"subtitle"},"Futhermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.")),e.medium&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h6",className:"list-title"},l.a.createElement(ce.a,{className:"icon"}),"How to make unlimited data entry?"),l.a.createElement(W.a,{variant:"subtitle2",className:"subtitle"},"Futhermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.")),e.large&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h4",className:"list-title"},l.a.createElement(ce.a,{className:"icon"}),"How to make unlimited data entry?"),l.a.createElement(W.a,{variant:"h6",className:"subtitle"},"Futhermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised."))),l.a.createElement("div",{className:"col-md-6 list-item bottom"},e.small&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"subtitle1",className:"list-title"},l.a.createElement(ce.a,{className:"icon"}),"Is ",l.a.createElement("span",null,"Landrick")," safer to use with my account?"),l.a.createElement(W.a,{variant:"body2",className:"subtitle"},"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.")),e.medium&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h6",className:"list-title"},l.a.createElement(ce.a,{className:"icon"}),"Is ",l.a.createElement("span",null,"Landrick")," safer to use with my account?"),l.a.createElement(W.a,{variant:"subtitle2",className:"subtitle"},"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.")),e.large&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h4",className:"list-title"},l.a.createElement(ce.a,{className:"icon"}),"Is ",l.a.createElement("span",null,"Landrick")," safer to use with my account?"),l.a.createElement(W.a,{variant:"h6",className:"subtitle"},"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.")))))))})))},se=t(88),oe=t.n(se),ue=t(89),de=t.n(ue),Ee=t(90),he=t.n(Ee),pe=function(){return l.a.createElement("div",null,l.a.createElement(T.a,{queries:{small:"(max-width: 699px)",medium:"(min-width: 700px) and (max-width: 1399px)",large:"(min-width: 1400px)"}},(function(e){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"contact-us"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"}),l.a.createElement("div",{className:"col-md-6 paragraph"},e.small&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h5",className:"title"},"Let's talk about your portfolio"),l.a.createElement(W.a,{variant:"subtitle2",className:"subtitle"},"Start working with ",l.a.createElement("span",null,"Landrick")," that can provide everything you need to generate awareness, drive traffic, connect.")),e.medium&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h3",className:"title"},"Let's talk about your portfolio"),l.a.createElement(W.a,{variant:"subtitle1",className:"subtitle"},"Start working with ",l.a.createElement("span",null,"Landrick")," that can provide everything you need to generate awareness, drive traffic, connect.")),e.large&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h1",className:"title"},"Let's talk about your portfolio"),l.a.createElement(W.a,{variant:"h5",className:"subtitle"},"Start working with ",l.a.createElement("span",null,"Landrick")," that can provide everything you need to generate awareness, drive traffic, connect.")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-1"},l.a.createElement(oe.a,{className:"icon"})),l.a.createElement("div",{className:"col-md-11"},l.a.createElement("div",{className:"contact-detail"},e.small&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"subtitle1",className:"title"},"Email"),l.a.createElement(W.a,{variant:"subtitle2",className:"subtitle"},"contact@example.com")),e.medium&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h6",className:"title"},"Email"),l.a.createElement(W.a,{variant:"subtitle1",className:"subtitle"},"contact@example.com")),e.large&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h3",className:"title"},"Email"),l.a.createElement(W.a,{variant:"h5",className:"subtitle"},"contact@example.com"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-1"},l.a.createElement(de.a,{className:"icon"})),l.a.createElement("div",{className:"col-md-11"},l.a.createElement("div",{className:"contact-detail"},e.small&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"subtitle1",className:"title"},"Phone"),l.a.createElement(W.a,{variant:"subtitle2",className:"subtitle"},"+152 534-468-854")),e.medium&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h6",className:"title"},"Phone"),l.a.createElement(W.a,{variant:"subtitle1",className:"subtitle"},"+152 534-468-854")),e.large&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h3",className:"title"},"Phone"),l.a.createElement(W.a,{variant:"h5",className:"subtitle"},"+152 534-468-854"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-1"},l.a.createElement(he.a,{className:"icon"})),l.a.createElement("div",{className:"col-md-11"},l.a.createElement("div",{className:"contact-detail"},e.small&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"subtitle1",className:"title"},"Location"),l.a.createElement(W.a,{variant:"subtitle2",className:"subtitle"},"View on Google Map")),e.medium&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h6",className:"title"},"Location"),l.a.createElement(W.a,{variant:"subtitle1",className:"subtitle"},"View on Google Map")),e.large&&l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{variant:"h3",className:"title"},"Location"),l.a.createElement(W.a,{variant:"h5",className:"subtitle"},"View on Google Map")))))))))})))},ve=function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"This site is created for demonstrative purposes only and does not offer any real products or services."),l.a.createElement("p",null,"\xa9 Nullion 2020"))};var ge=function(){return l.a.createElement(L.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(C,null),l.a.createElement(I.a,{exact:!0,path:"/",component:re}),l.a.createElement(I.a,{exact:!0,path:"/about",component:me}),l.a.createElement(I.a,{exact:!0,path:"/contact",component:pe}),l.a.createElement(ve,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,a,t){e.exports=t.p+"static/media/logo.950babc8.png"},81:function(e,a,t){e.exports=t.p+"static/media/10364.a9a110df.jpg"},82:function(e,a,t){e.exports=t.p+"static/media/25060.63790588.jpg"},83:function(e,a,t){e.exports=t.p+"static/media/31214.b0603a5a.jpg"},84:function(e,a,t){e.exports=t.p+"static/media/195548-OY9OIN-908.4898f1f8.jpg"},85:function(e,a,t){e.exports=t.p+"static/media/OGN39D0.dfc25c7c.jpg"},86:function(e,a,t){e.exports=t.p+"static/media/health-insurance.e803563c.svg"},87:function(e,a,t){e.exports=t.p+"static/media/investment-plan.6c7021e9.svg"}},[[100,1,2]]]);
//# sourceMappingURL=main.9b40dbf9.chunk.js.map