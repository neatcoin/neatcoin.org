(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{72:function(o,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"metadata",(function(){return s})),n.d(e,"toc",(function(){return r})),n.d(e,"default",(function(){return p}));var t=n(3),i=n(7),a=(n(0),n(88)),l={id:"bootstrap",title:"Bootstrap"},s={unversionedId:"bootstrap",id:"bootstrap",isDocsHomePage:!1,title:"Bootstrap",description:"Bootstraping a network, specifically, allocating balances in the genesis",source:"@site/docs/bootstrap.md",slug:"/bootstrap",permalink:"/docs/bootstrap",editUrl:"https://github.com/neatcoin/neatcoin.org/edit/master/website/docs/bootstrap.md",version:"current",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/"},next:{title:"Mimblewimble Privacy Transaction",permalink:"/docs/mimblewimble"}},r=[],c={toc:r};function p(o){var e=o.components,n=Object(i.a)(o,["components"]);return Object(a.b)("wrapper",Object(t.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Bootstraping a network, specifically, allocating balances in the genesis\nblock, is a boring, yet important task that has to be done. Unlike a PoW\nblockchain, a PoS one like Neatcoin must have some forms of pre-mine."),Object(a.b)("p",null,"For obvious reasons, it will not be possible to purchase any Neatcoin tokens. The\ndevs will also not reserve any coins for themselves. The whole Neatcoin genesis\nallocation will be inheriting from another blockchain, called Kulupu, using a\nfancy way, called lock dropping."),Object(a.b)("p",null,'The lock dropping period will last for one month on the Kulupu blockchain.\nDuring this time, KLP token holders can voluntarily decide to "lock up" their\ncoins, with minimum locking period of one month, and maximum locking period of 5\nyears. The allocation of Neatcoin scales linearly with the locking period. For\nexample, locking for one month will result in 0.083x scaling, and locking for 5\nyears will result in 5x scaling. The actual scaling will be calculated down\nprecise to the actual lock block numbers, using integer divisions.'))}p.isMDXComponent=!0}}]);