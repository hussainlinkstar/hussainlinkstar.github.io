webpackJsonp([62],{2522:function(e,a,t){"use strict";var n=t(7),i=t.n(n),c=t(12),r=t.n(c),d=t(4),l=t.n(d),s=t(5),o=t.n(s),u=t(13),b=t.n(u),m=t(14),p=t.n(m),f=t(0),h=t.n(f),j=t(17),O=t(6),E=t(191),A=function(e,a){return function(t){function n(){var e,a,t,i;l()(this,n);for(var c=arguments.length,d=Array(c),s=0;s<c;s++)d[s]=arguments[s];return a=t=b()(this,(e=n.__proto__||r()(n)).call.apply(e,[this].concat(d))),t.state={isLoading:!0,receiveFetchedData:!1},t.finishLoading=function(e,a){return t.setState({isLoading:!1,receiveFetchedData:Object(O.isNil)(e)||Object(O.isEmpty)(e)},function(){return a&&a()})},i=a,b()(t,i)}return p()(n,t),o()(n,[{key:"render",value:function(){switch(!0){case this.state.isLoading:return h.a.createElement("div",null,a?h.a.createElement(a,null):h.a.createElement(E.a,{className:"loader--app",description:Object(j.b)("common.loading")+"..."}),h.a.createElement(e,i()({finishLoading:this.finishLoading},this.props)));case this.state.receiveFetchedData&&!this.state.isLoading:return window.location.href="/not-found",a?h.a.createElement(a,null):h.a.createElement(E.a,{className:"loader--app",description:Object(j.b)("common.loading")+"..."});default:return h.a.createElement(e,i()({finishLoading:this.finishLoading},this.props))}}}]),n}(f.Component)};a.a=A},3135:function(e,a,t){"use strict";var n=t(0),i=t.n(n),c=t(28),r=t(78),d=t(19),l=t(2587),s=t(448),o=t(772),u=t(4243),b=t(4250),m=t(236),p=function(e,a){var t=a.match.params.candidateId;return{details:Object(s.h)(e,t),firstName:Object(s.k)(e,t),lastName:Object(s.o)(e,t),major:Object(o.b)(e,t),location:Object(s.p)(e,t),id:t,hasDatabaseSearchAvailable:Object(m.q)(e),contactSection:function(){return i.a.createElement(u.a,null)},asideSection:function(){return i.a.createElement(b.a,null)},hasOlivPlus:Object(s.x)(e,t)}};a.a=Object(r.d)(d.g,Object(c.b)(p))(l.a)},3138:function(e,a,t){"use strict";var n=t(28),i=t(78),c=t(19),r=t(4252),d=t(779),l=t(448),s=t(236),o=t(30),u=t(122),b=function(e,a){var t=a.match.params.candidateId,n=Object(l.h)(e,t),i=Object(o.k)(e);return{adminFullName:Object(d.d)(e,i),candidate:n,canUseDatabaseSearch:Object(s.q)(e),shouldUnlock:Object(l.B)(e,t),organisationRole:Object(o.c)(e),organisationName:Object(u.e)(e,i)}};a.a=Object(i.d)(c.g,Object(n.b)(b))(r.a)},3140:function(e,a,t){"use strict";var n=t(28),i=t(78),c=t(19),r=t(3141),d=t(448),l=function(e,a){var t=a.match.params.candidateId;return{userAvailability:Object(d.a)(e,t),isAvailable:Object(d.z)(e,t)}},s=function(e){return{}};a.a=Object(i.d)(c.g,Object(n.b)(l,s))(r.a)},3142:function(e,a,t){"use strict";var n=t(28),i=t(0),c=t.n(i),r=t(78),d=t(19),l=t(2589),s=t(3140),o=t(448),u=t(470),b=function(e,a){var t=a.match.params.candidateId;return{details:Object(o.h)(e,t),fullName:Object(o.l)(e,t),availabilitySection:function(){return c.a.createElement(s.a,null)},navigationItems:Object(u.a)(),isAvailable:Object(o.z)(e,t)}};a.a=Object(r.d)(d.g,Object(n.b)(b))(l.a)},3143:function(e,a,t){"use strict";var n=t(28),i=t(78),c=t(19),r=t(3144),d=t(448),l=function(e,a){var t=a.match.params.candidateId;return{candidateId:t,pitch:Object(d.t)(e,t)}};a.a=Object(i.d)(c.g,Object(n.b)(l))(r.a)},3145:function(e,a,t){"use strict";var n=t(28),i=t(78),c=t(19),r=t(3146),d=t(448),l=t(769),s=t(154),o=function(e,a){var t=a.match.params.candidateId;return{userAge:Object(d.e)(e,t),userGender:Object(d.m)(e,t),userNationality:Object(d.r)(e,t),userVisa:Object(d.v)(e,t),userDrivingLicence:Object(d.i)(e,t),userCarCapacity:Object(d.g)(e,t),isSensitiveMarket:Object(s.t)(e)}},u=function(e){return{fetchCountries:function(){return e(Object(l.d)())}}};a.a=Object(i.d)(c.g,Object(n.b)(o,u))(r.a)},3148:function(e,a,t){"use strict";var n=t(28),i=t(78),c=t(19),r=t(2607),d=t(2096),l=t(448),s=t(44),o=t(777),u=function(e,a){return{documents:Object(d.f)(e),shouldUnlock:Object(l.B)(e,a.match.params.candidateId)}},b=function(e,a){return{handleCandidateUnlock:function(t,n,i){return function(){return e(Object(s.l)(a.match.params.candidateId)).then(function(e){if(e.type===s.c)return i?Object(o.e)(t,n):Object(o.c)(t,n)})}}}};a.a=Object(i.d)(c.g,Object(n.b)(u,b))(r.a)},3149:function(e,a,t){"use strict";var n=t(28),i=t(78),c=t(19),r=t(2591),d=t(448),l=t(785),s=t(772),o=t(769),u=function(e,a){var t=a.match.params.candidateId;return{isHighSchoolLevelEducation:Object(d.A)(e,t),universities:Object(s.a)(t)(e),highSchools:Object(l.a)(e,t),withHighlights:!0,candidateId:t}},b=function(e){return{fetchEducationResources:function(){return e(Object(o.f)())}}};a.a=Object(i.d)(c.g,Object(n.b)(u,b))(r.a)},3150:function(e,a,t){"use strict";var n=t(28),i=t(78),c=t(19),r=t(2592),d=t(2135),l=function(e,a){var t=a.match.params.candidateId;return{certificates:Object(d.a)(e,t),withHighlights:!0,candidateId:t}};a.a=Object(i.d)(c.g,Object(n.b)(l))(r.a)},3151:function(e,a,t){"use strict";var n=t(28),i=t(78),c=t(19),r=t(2244),d=t(2105),l=function(e,a){var t=a.match.params.candidateId;return{experiences:Object(d.a)(e,t),withHighlights:!0,candidateId:t}};a.a=Object(i.d)(c.g,Object(n.b)(l))(r.a)},3152:function(e,a,t){"use strict";var n=t(28),i=t(78),c=t(19),r=t(2244),d=t(2105),l=function(e,a){var t=a.match.params.candidateId;return{experiences:Object(d.b)(e,t),withHighlights:!1,candidateId:t}};a.a=Object(i.d)(c.g,Object(n.b)(l))(r.a)},3153:function(e,a,t){"use strict";var n=t(28),i=t(78),c=t(19),r=t(2245),d=t(2166),l=function(e,a){var t=a.match.params.candidateId;return{tagsList:Object(d.b)(e),withHighlights:!0,candidateId:t}};a.a=Object(i.d)(c.g,Object(n.b)(l))(r.a)},3154:function(e,a,t){"use strict";var n=t(28),i=t(78),c=t(19),r=t(2245),d=t(2171),l=function(e,a){var t=a.match.params.candidateId;return{tagsList:Object(d.a)()(e),withHighlights:!1,candidateId:t}};a.a=Object(i.d)(c.g,Object(n.b)(l))(r.a)},3155:function(e,a,t){"use strict";var n=t(28),i=t(78),c=t(19),r=t(2593),d=t(782),l=function(e,a){var t=a.match.params.candidateId;return{languages:Object(d.b)(e,t)}};a.a=Object(i.d)(c.g,Object(n.b)(l))(r.a)},3156:function(e,a,t){"use strict";var n=t(28),i=t(78),c=t(19),r=t(3157),d=t(448),l=function(e,a){var t=a.match.params.candidateId;return{videoCvUrl:Object(d.u)(e,t)}};a.a=Object(i.d)(c.g,Object(n.b)(l))(r.a)},3158:function(e,a,t){"use strict";var n=t(28),i=t(78),c=t(19),r=t(2607),d=t(2096),l=t(448),s=t(44),o=t(777),u=function(e,a){return{documents:Object(d.g)(e),shouldUnlock:Object(l.B)(e,a.match.params.candidateId)}},b=function(e,a){return{handleCandidateUnlock:function(t,n,i){return function(){return e(Object(s.l)(a.match.params.candidateId)).then(function(e){if(e.type===s.c)return i?Object(o.e)(t,n):Object(o.c)(t,n)})}}}};a.a=Object(i.d)(c.g,Object(n.b)(u,b))(r.a)},3159:function(e,a,t){"use strict";var n=t(28),i=t(78),c=t(19),r=t(467),d=t(2167),l=t(3160),s=function(e,a){var t=a.match.params.candidateId;return{websites:Object(d.b)(e,t),linkedIn:Object(d.a)(t,r.d.linkedin)(e),instagram:Object(d.a)(t,r.d.instagram)(e),twitter:Object(d.a)(t,r.d.twitter)(e),hasAnySocialLink:Object(d.f)(e,t)}};a.a=Object(i.d)(c.g,Object(n.b)(s))(l.a)},3161:function(e,a,t){var n=t(4290);"string"===typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0};i.transform=void 0;t(1999)(n,i);n.locals&&(e.exports=n.locals)},4240:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(28),i=t(19),c=t(4241),r=t(60),d=t(236),l=t(194),s=t(3163),o=t(2135),u=t(2105),b=t(2166),m=t(782),p=t(448),f=t(2096),h=t(2171),j=t(2167),O=function(e,a){var t=a.match.params.candidateId;return{candidateId:t,canUseDatabaseSearch:Object(d.q)(e),candidateDetails:e.candidates.entries[t],hasCandidateAnyCertificates:Object(o.g)(e,t),hasCandidateAnyExperience:Object(u.l)(e,t),hasCandidateAnyVolunteering:Object(u.m)(e,t),hasCandidateAnySkills:Object(b.c)(e),hasCandidateAnyLanguages:Object(m.g)(e,t),hasCandidateVideoCv:Object(p.y)(e,t),hasAnyAdditionalDocuments:Object(f.j)(e),hasCandidateAnyInterests:Object(h.b)(e),hasCandidateAnyWebsites:Object(j.g)(e,t)}},E=function(e,a){return{fetchCandidate:function(){return e(Object(r.h)(a.match.params.candidateId))},setCandidateAsViewed:function(){return e(Object(l.g)(a.match.params.candidateId))}}};a.default=Object(i.g)(Object(n.b)(O,E)(Object(s.a)(c.a)))},4241:function(e,a,t){"use strict";var n=t(0),i=t.n(n),c=t(4242),r=t(4291),d=t(58),l=function(e){return e.isMobile?i.a.createElement(c.a,e):i.a.createElement(r.a,e)};a.a=Object(d.a)(l)},4242:function(e,a,t){"use strict";var n=t(0),i=t.n(n),c=t(17),r=t(6),d=t(3),l=t.n(d),s=t(19),o=t(21),u=t(2522),b=t(456),m=t(3135),p=t(120),f=t(3142),h=t(2089),j=t(3143),O=t(3145),E=t(3148),A=t(3149),v=t(3150),g=t(3151),C=t(3152),y=t(3153),_=t(3154),w=t(3155),x=t(3156),I=t(3158),k=t(3159),B=t(2170),D=t(3161),N=(t.n(D),t(130)),S=t(79),L=t(3162),U=function(e){Object(n.useEffect)(function(){Object(p.a)(),e.fetchCandidate(),e.setCandidateAsViewed()},[]),Object(n.useEffect)(function(){Object(r.not)(Object(r.isEmpty)(e.candidateDetails.id))&&e.finishLoading(e.candidateDetails)},[e.candidateDetails]),Object(n.useEffect)(function(){return function(){Object(p.d)()}},[]);var a=function(){var a=window,t=a.opener,n=t?""+Object(N.k)(t.location.pathname)+t.location.search:S.a.candidates;return e.history.push(n)},t=e.canUseDatabaseSearch,d=e.hasCandidateAnyCertificates,l=e.hasCandidateAnyExperience,s=e.hasCandidateAnyVolunteering,o=e.hasCandidateAnySkills,u=e.hasCandidateAnyLanguages,b=e.hasCandidateVideoCv,D=e.hasAnyAdditionalDocuments,U=e.hasCandidateAnyInterests,V=e.hasCandidateAnyWebsites;return i.a.createElement(B.a,{show:!0},i.a.createElement("section",{className:"candidate-details-view-mobile__container parsing--hidden"},i.a.createElement(m.a,null),i.a.createElement(L.a,{button:!0,onClick:a}),i.a.createElement(f.a,null),i.a.createElement(h.a,{header:Object(c.b)("common.about")},i.a.createElement(j.a,null),i.a.createElement(O.a,null)),t&&i.a.createElement(h.a,{header:Object(c.b)("candidate.profile.cvFiles.resume")},i.a.createElement(E.a,null)),i.a.createElement(h.a,{header:Object(c.b)("profile.education.title")},i.a.createElement(A.a,null)),d&&i.a.createElement(h.a,{header:Object(c.b)("profile.education.sections.additionalCertifications.label")},i.a.createElement(v.a,null)),l&&i.a.createElement(h.a,{header:Object(c.b)("profile.experience.title")},i.a.createElement(g.a,null)),s&&i.a.createElement(h.a,{header:Object(c.b)("profile.experience.sections.volunteering.label")},i.a.createElement(C.a,null)),o&&i.a.createElement(h.a,{header:Object(c.b)("profile.experience.sections.skills.label")},i.a.createElement(y.a,null)),u&&i.a.createElement(h.a,{header:Object(c.b)("profile.additional.sections.languages.label")},i.a.createElement(w.a,null)),t&&i.a.createElement(n.Fragment,null,b&&i.a.createElement(h.a,{header:Object(c.b)("profile.media.sections.videoCV.label")},i.a.createElement(x.a,null)),D&&i.a.createElement(h.a,{header:Object(c.b)("profile.additional.sections.additionalDocuments.label")},i.a.createElement(I.a,null))),U&&i.a.createElement(h.a,{header:Object(c.b)("profile.experience.sections.interests.label")},i.a.createElement(_.a,null)),t&&V&&i.a.createElement(h.a,{isWrapped:!0,header:Object(c.b)("candidate.profile.socialLinks.social")},i.a.createElement(k.a,null))))};U.defaultProps={candidateDetails:{id:""}},U.propTypes={candidateDetails:l.a.object,fetchCandidate:l.a.func.isRequired},a.a=Object(s.g)(Object(o.a)(Object(u.a)(U,b.a)))},4243:function(e,a,t){"use strict";var n=t(28),i=t(19),c=t(78),r=t(3136),d=t(448),l=t(236),s=function(e,a){var t=a.match.params.candidateId;return{email:Object(d.q)(e,t),phoneNumber:Object(d.s)(e,t),candidateId:t,canUseDatabaseSearch:Object(l.q)(e),shouldUnlock:Object(d.B)(e,t)}};a.a=Object(c.d)(i.g,Object(n.b)(s))(r.a)},4250:function(e,a,t){"use strict";var n=t(0),i=t.n(n),c=t(4251),r=t(4262),d=t(58),l=function(e){return e.isMobile?i.a.createElement(c.a,e):i.a.createElement(r.a,e)};a.a=Object(d.a)(l)},4251:function(e,a,t){"use strict";function n(){return c.a.createElement(i.Fragment,null,c.a.createElement(r.a,null))}var i=t(0),c=t.n(i),r=t(3138);a.a=n},4252:function(e,a,t){"use strict";var n=t(4253);a.a=n.a},4253:function(e,a,t){"use strict";function n(e){var a=Object(r.useState)(!1),t=c()(a,2),n=t[0],i=t[1],h=function(){i(!0),O.a.track("Button Click - Invite To Apply")},j=function(){return i(!1)},E=function(a){a.stopPropagation(),a.preventDefault(),e.history.push(l.n.creditsReview)},A=function(e){e.stopPropagation(),e.preventDefault(),O.a.track("Button Click - Invite To Apply")},v=e.shouldUnlock,g=e.candidate;return d.a.createElement("div",{className:"candidate-profile-invite-to-apply"},function(){var a=e.canUseDatabaseSearch,t=e.organisationRole,n=e.adminFullName,i=e.organisationName;switch(!0){case a:return d.a.createElement(b.a,{onClick:A,placeholderComponent:d.a.createElement(s.b,{className:"candidate-profile-invite-to-apply__btn",primary:!0},d.a.createElement("i",{className:"ion-md-person-add"}),Object(m.b)("common.inviteToApply")),allowedFor:[u.d.cvSearch]},d.a.createElement(s.b,{className:"candidate-profile-invite-to-apply__btn",primary:!0,onClick:h},d.a.createElement("i",{className:"ion-md-person-add"}),Object(m.b)("common.inviteToApply")));case!a&&t===u.e.organisation_manager:return d.a.createElement(f.a,{notAllowed:!0,content:Object(m.b)("tooltips.teamMemberAccess.cvSearchBuy",{adminFullName:n,organisationName:i}),trigger:"mouseenter"},d.a.createElement(s.b,{className:"candidate-profile-invite-to-apply__btn",disabled:!0},d.a.createElement("i",{className:"ion-md-person-add"}),Object(m.b)("common.inviteToApply")));default:return d.a.createElement(f.a,{notAllowed:!0,content:Object(m.b)("accessPermissions.button")},d.a.createElement(s.b,{className:"candidate-profile-invite-to-apply__btn",onClick:E},d.a.createElement("i",{className:"ion-md-person-add"}),Object(m.b)("common.inviteToApply")))}}(),d.a.createElement(o.a,{title:Object(m.b)("modals.inviteToApply.title"),description:Object(m.b)("modals.inviteToApply.description"),isModalVisible:n,hideInviteModal:j,closeOnSubmit:!1,shouldUnlock:v},d.a.createElement(p.a,{candidate:g})))}var i=t(119),c=t.n(i),r=t(0),d=t.n(r),l=t(79),s=t(91),o=t(2561),u=t(23),b=t(238),m=t(17),p=t(3139),f=t(449),h=t(4260),j=(t.n(h),t(189)),O=t.n(j);a.a=n},4260:function(e,a,t){var n=t(4261);"string"===typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0};i.transform=void 0;t(1999)(n,i);n.locals&&(e.exports=n.locals)},4261:function(e,a,t){a=e.exports=t(1998)(!0),a.push([e.i,".candidate-profile-invite-to-apply__btn{padding:0 27px;font-size:14px;font-weight:400;color:#fff}.candidate-profile-invite-to-apply__btn i{color:#fff}","",{version:3,sources:["C:/projects/oliv-frontend/src/Employer/components/CandidateProfileDetails/CandidateProfileInviteToApply/CandidateProfileInviteToApply.scss"],names:[],mappings:"AAAA,wCACE,eAAgB,AAChB,eAAgB,AAChB,gBAAiB,AACjB,UAAY,CAAE,AACd,0CACE,UAAY,CAAE",file:"CandidateProfileInviteToApply.scss",sourcesContent:[".candidate-profile-invite-to-apply__btn {\n  padding: 0 27px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #fff; }\n  .candidate-profile-invite-to-apply__btn i {\n    color: #fff; }\n"],sourceRoot:""}])},4262:function(e,a,t){"use strict";function n(e){return c.a.createElement(i.Fragment,null,c.a.createElement(d.a,null),c.a.createElement(r.a,null))}var i=t(0),c=t.n(i),r=t(3140),d=t(3138);a.a=n},4290:function(e,a,t){a=e.exports=t(1998)(!0),a.push([e.i,".candidate-details-view__container{display:block!important}.candidate-details__body{margin-top:32px}@media screen and (max-width:768px){.candidate-details__body{margin-top:24px}}.candidate-details__body .candidate-details__sidebar{padding-left:24px}@media screen and (max-width:768px){.candidate-details__body .candidate-details__sidebar{padding-left:.8rem;margin-top:16px}}.candidate-details-view-mobile__container{display:block!important;padding:0 17px;margin-top:44px}","",{version:3,sources:["C:/projects/oliv-frontend/src/Employer/views/CandidateDetailsView/CandidateDetailsView.scss"],names:[],mappings:"AAAA,mCACE,uBAA0B,CAAE,AAE9B,yBACE,eAAiB,CAAE,AACnB,oCACE,yBACE,eAAiB,CAAE,CAAE,AACzB,qDACE,iBAAmB,CAAE,AACrB,oCACE,qDACE,mBAAqB,AACrB,eAAiB,CAAE,CAAE,AAE7B,0CACE,wBAA0B,AAC1B,eAAgB,AAChB,eAAiB,CAAE",file:"CandidateDetailsView.scss",sourcesContent:[".candidate-details-view__container {\n  display: block !important; }\n\n.candidate-details__body {\n  margin-top: 32px; }\n  @media screen and (max-width: 768px) {\n    .candidate-details__body {\n      margin-top: 24px; } }\n  .candidate-details__body .candidate-details__sidebar {\n    padding-left: 24px; }\n    @media screen and (max-width: 768px) {\n      .candidate-details__body .candidate-details__sidebar {\n        padding-left: 0.8rem;\n        margin-top: 16px; } }\n\n.candidate-details-view-mobile__container {\n  display: block !important;\n  padding: 0 17px;\n  margin-top: 44px; }\n"],sourceRoot:""}])},4291:function(e,a,t){"use strict";var n=t(0),i=t.n(n),c=t(17),r=t(6),d=t(3),l=t.n(d),s=t(19),o=t(79),u=t(21),b=t(767),m=t(2173),p=t(2522),f=t(456),h=t(130),j=t(3135),O=t(120),E=t(3142),A=t(81),v=(t.n(A),t(802)),g=t(2089),C=t(3143),y=t(3145),_=t(3148),w=t(3149),x=t(3150),I=t(3151),k=t(3152),B=t(3153),D=t(3154),N=t(3155),S=t(3156),L=t(3158),U=t(3159),V=t(3161),W=(t.n(V),function(e){Object(n.useEffect)(function(){Object(O.a)(),e.fetchCandidate(),e.setCandidateAsViewed()},[]),Object(n.useEffect)(function(){Object(r.not)(Object(r.isEmpty)(e.candidateDetails.id))&&e.finishLoading(e.candidateDetails)},[e.candidateDetails]),Object(n.useEffect)(function(){return function(){Object(O.d)()}},[]);var a=function(){var a=window,t=a.opener,n=t?""+Object(h.k)(t.location.pathname)+t.location.search:o.a.candidates;return e.history.push(n)},t=e.canUseDatabaseSearch,d=e.hasCandidateAnyCertificates,l=e.hasCandidateAnyExperience,s=e.hasCandidateAnyVolunteering,u=e.hasCandidateAnySkills,p=e.hasCandidateAnyLanguages,f=e.hasCandidateVideoCv,V=e.hasAnyAdditionalDocuments,W=e.hasCandidateAnyInterests,T=e.hasCandidateAnyWebsites;return i.a.createElement("section",{className:"candidate-details-view__container parsing--hidden"},i.a.createElement(b.a,null,i.a.createElement(m.a,{button:!0,onClick:a,name:Object(c.b)("employer.candidates.backToCandidates")}),i.a.createElement(j.a,null)),i.a.createElement(E.a,null),i.a.createElement(b.a,null,i.a.createElement(A.Element,{name:v.b.about},i.a.createElement(g.a,{isWrapped:!0,header:Object(c.b)("common.about")},i.a.createElement(C.a,null),i.a.createElement(y.a,null))),t&&i.a.createElement(A.Element,{name:v.b.resume},i.a.createElement(g.a,{isWrapped:!0,header:Object(c.b)("candidate.profile.cvFiles.resume")},i.a.createElement(_.a,null))),i.a.createElement(A.Element,{name:v.b.education},i.a.createElement(g.a,{isWrapped:!0,header:Object(c.b)("profile.education.title")},i.a.createElement(w.a,null)),d&&i.a.createElement(g.a,{isWrapped:!0,header:Object(c.b)("profile.education.sections.additionalCertifications.label")},i.a.createElement(x.a,null))),i.a.createElement(A.Element,{name:v.b.experience},l&&i.a.createElement(g.a,{isWrapped:!0,header:Object(c.b)("profile.experience.title")},i.a.createElement(I.a,null)),s&&i.a.createElement(g.a,{isWrapped:!0,header:Object(c.b)("profile.experience.sections.volunteering.label")},i.a.createElement(k.a,null)),u&&i.a.createElement(g.a,{isWrapped:!0,header:Object(c.b)("profile.experience.sections.skills.label")},i.a.createElement(B.a,null))),p&&i.a.createElement(A.Element,{name:v.b.languages},i.a.createElement(g.a,{isWrapped:!0,header:Object(c.b)("profile.additional.sections.languages.label")},i.a.createElement(N.a,null))),t&&(f||V)&&i.a.createElement(A.Element,{name:v.b.videoCv},f&&i.a.createElement(g.a,{isWrapped:!0,header:Object(c.b)("profile.media.sections.videoCV.label")},i.a.createElement(S.a,null)),V&&i.a.createElement(g.a,{isWrapped:!0,header:Object(c.b)("profile.additional.sections.additionalDocuments.label")},i.a.createElement(L.a,null))),W&&i.a.createElement(A.Element,{name:v.b.interests},i.a.createElement(g.a,{isWrapped:!0,header:Object(c.b)("profile.experience.sections.interests.label")},i.a.createElement(D.a,null))),t&&T&&i.a.createElement(A.Element,{name:v.b.social},i.a.createElement(g.a,{header:Object(c.b)("candidate.profile.socialLinks.social")},i.a.createElement(U.a,null)))))});W.defaultProps={candidateDetails:{id:""}},W.propTypes={candidateDetails:l.a.object,fetchCandidate:l.a.func.isRequired},a.a=Object(s.g)(Object(u.a)(Object(p.a)(W,f.a)))}});
//# sourceMappingURL=CandidateDetailsViewConnector.de170a2b.chunk.js.map