function myFunction(){var e,n,a,i;for(e=document.getElementById("myInput").value.toUpperCase(),n=document.getElementById("myTable").getElementsByTagName("tr"),i=0;i<n.length;i++)(a=n[i].getElementsByTagName("td")[1])&&(a.innerHTML.toUpperCase().indexOf(e)>-1?n[i].style.display="":n[i].style.display="none")}$(document).ready(function(){"use strict";$(".about-menu").hover(function(){$(".about-mm").fadeIn()}),$(".about-menu").mouseleave(function(){$(".about-mm").fadeOut()}),$(".admi-menu").hover(function(){$(".admi-mm").fadeIn()}),$(".admi-menu").mouseleave(function(){$(".admi-mm").fadeOut()}),$(".cour-menu").hover(function(){$(".cour-mm").fadeIn()}),$(".cour-menu").mouseleave(function(){$(".cour-mm").fadeOut()}),$(".top-drop-menu").on("click",function(){$(".man-drop").fadeIn()}),$(".man-drop").mouseleave(function(){$(".man-drop").fadeOut()}),$(".wed-top").mouseleave(function(){$(".man-drop").fadeOut()}),$("#sf-box").on("click",function(){$(".sf-list").fadeIn()}),$(".sf-list").mouseleave(function(){$(".sf-list").fadeOut()}),$(".search-top").mouseleave(function(){$(".sf-list").fadeOut()}),$(".sdb-btn-edit").hover(function(){$(this).text("Click to edit my profile")}),$(".sdb-btn-edit").mouseleave(function(){$(this).text("edit my profile")}),$(".ed-micon").on("click",function(){$(".ed-mm-inn").addClass("ed-mm-act")}),$(".ed-mi-close").on("click",function(){$(".ed-mm-inn").removeClass("ed-mm-act")}),$(".map-container").on("click",function(){$(this).find("iframe").addClass("clicked")}).on("mouseleave",function(){$(this).find("iframe").removeClass("clicked")}),$("#status").fadeOut(),$("#preloader").delay(800).fadeOut("slow"),$("body").delay(3e3).css({overflow:"visible"}),$("select").material_select(),$(".slider").slider(),$("#select-city,#select-city-1,#select-city-2,#select-city-3,#select-city-4,#select-city-5.autocomplete").autocomplete({data:{"New York":null,California:null,Illinois:null,Texas:null,Pennsylvania:null,"San Diego":null,"Los Angeles":null,Dallas:null,Austin:null,Columbus:null,Charlotte:null,"El Paso":null,Portland:null,"Las Vegas":null,"Oklahoma City":null,Milwaukee:null,Tucson:null,Sacramento:null,"Long Beach":null,Oakland:null,Arlington:null,Tampa:null,"Corpus Christi":null,Greensboro:null,"Jersey City":null},limit:8,onAutocomplete:function(e){},minLength:1}),$("#select-search,#select-search-1,#select-search-2.autocomplete").autocomplete({data:{"Top Honeymoon Packages in India":"images/icon/7.png","Family Package":"images/icon/8.png","World Tour Package":"images/icon/9.png","Hill Stations":"images/icon/10.png","America Holidays":"images/icon/11.png","Germany Holidays":"images/icon/12.png","Hong Kong Holidays":"images/icon/13.png","Europe Holidays":"images/icon/14.png","France Holidays":"images/icon/15.png","Switzerland,Bali,Thailand Package":"images/icon/16.png","Maldives,Malaysia,Pattaya Package":"images/icon/17.png","Dubai Packages":"images/icon/18.png","Europe Tour Packages":"images/icon/19.png","USA Tour Packages":"images/icon/20.png","Mexico City, Mexico":"images/icon/21.png","Seoul, South Korea":"images/icon/22.png","Ljubljana, Slovenia":"images/icon/23.png","Wroclaw, Poland":"images/icon/24.png","Nashville, USA":"images/icon/25.png","Amsterdam, the Netherlands":"images/icon/26.png","First World Hotel":"images/icon/27.png","MGM Grand Las Vegas Hotel":"images/icon/28.png",CityCenter:"images/icon/29.png","Holiday Hotel Inn":"images/icon/13.png","Tour and Travel Packages":"images/icon/14.png","City Seight Seeings":"images/icon/15.png","Mandarin Oriental, Hong Kong, China":"images/icon/25.png","Trump International Hotel & Tower, New York, United States":"images/icon/26.png","First World Hotel":"images/icon/27.png","MGM Grand Las Vegas Hotel":"images/icon/28.png",CityCenter:"images/icon/29.png","Holiday Hotel Inn":"images/icon/13.png","Tour and Travel Packages":"images/icon/14.png","City Seight Seeings":"images/icon/15.png"},limit:8,onAutocomplete:function(e){},minLength:1})});
