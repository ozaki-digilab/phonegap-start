/* Copyright (c) 2012-2014 Adobe Systems Incorporated. All rights reserved.

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		navigator.compass.watchHeading(app.successFunc, app.errorFunc,
		{
			frequency: 100
		});
	},
	// コンパスの取得に成功した場合の処理
	successFunc: function(heading){
		var deg = (heading.magneticHeading ? heading.magneticHeading : heading);
		console.log(deg);
		$("#stat").html(deg);
		$("#app").css("transform", "rotate("+deg/2+"deg)");
		$("#app").css("-ms-transform", "rotate("+deg/2+"deg)");
		$("#app").css("-moz-transform", "rotate("+deg/2+"deg)");
		$("#app").css("-webkit-transform", "rotate("+deg/2+"deg)");
	},
	// エラーの場合
	errorFunc: function(){
		$("#stat").html("エラー");
	}
};
