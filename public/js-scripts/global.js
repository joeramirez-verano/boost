if (window.location.href.includes('display-new-age-gate') || window.location.href.includes('localhost') || window.location.href.includes('boost') || window.location.href.includes('menu.zenleafdispensaries.com')) {

	console.log('global.js loaded');

	var verano = {
		timestamp:{
			scriptLoaded: Date.now(),
		},
		getBrand: function () {
			// if the page is muv
			if (window.location.href.includes('muvfl') || document.title.includes('MÜV')) {
				return 'MUV';
			}

			// if the page is zenleaf
			if (window.location.href.includes('zenleaf') || document.title.includes('Zen Leaf')) {
				return 'ZLD';
			}
			return '';
		},
		getDevice: function () {
			// if the device is ios
			if (/iPad|iPhone/.test(navigator.userAgent) && !window.MSStream) {
				return 'ios';
			}

			// if the device is android
			if (/Chrome/.test(navigator.userAgent) && /Android/.test(navigator.userAgent)) {
				return 'android';
			}

			return null;
		},
		getEnvironmentUrl: function () {

		if (window.location.href.includes("localhost")) {
			return 'https://hd2khn60dbja2t5kvsal97g8a.js.wpenginepowered.com';
			} else if (verano.host === "Sweed") {
				return 'https://hd2khn60dbja2t5kvsal97g8a.js.wpenginepowered.com';
			} else if (verano.host === "Jane") {
				return 'https://hd2khn60dbja2t5kvsal97g8a.js.wpenginepowered.com';
			} else if (verano.brand === "ZLD") {
				return 'https://hd2khn60dbja2t5kvsal97g8a.js.wpenginepowered.com';
			} else {
				return '';
			}
		},
		getHost: function () {

			var host = 'Jane';

			// check each <link> in the head for sweedpos.com
			if (document.querySelector('link[href*="sweedpos.com"]')) {
				host = 'Sweed';
			} else if (window.location.href.includes('menu.zenleafdispensaries.com')) {
				host = 'Jane';
			}else if (window.location.href.includes('zenleafdispensaries.com')) {
				host = 'ZLD';
			} else if (window.location.href.includes('muvfl.com') || document.title.includes('MÜV')) {
				host = 'MUV';
			}

			return host;
		},
		isNextPageHydrated: function () {
			
		// this variable is set in the app/layout.js file, and is also set by sweed on their pages
			if (window.__sw_hydrate && window.__sw_hydrate.ready) {
				return true;
			} else {
				return false;
			}
			
		},
		getCurrentUrl: function () {
			return window.location.href;
		},
		runScript: function (url) {
			// inject a <script> into the head of the html page
			let injectScript = document.createElement('script');
			injectScript.src = url;
			document.head.appendChild(injectScript);
		},
		setCookie: function (name, value, days) {
			let expires = '';
			if (days) {
				let date = new Date();
				date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
				expires = '; expires=' + date.toUTCString();
			}
			let cookieStr = `${name}=${value || ""}${expires}; path=/`;
			if (location.hostname.endsWith("zenleafdispensaries.com")) {
				cookieStr += "; domain=.zenleafdispensaries.com";
			}
      		document.cookie = cookieStr;

		},
		removeCookie: function (name) {
			// set the cookie with an expiration date in the past
			verano.setCookie(name, '', -1);
		},
		getCookie: function (name) {
			let nameEQ = name + '=';
			let ca = document.cookie.split(';');
			for (let i = 0; i < ca.length; i++) {
				let c = ca[i];
				while (c.charAt(0) === ' ') c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
			}
			return null;
		},
		generateSessionId: function () {

			// check if sessionId already exists and is not expired
			const existingSessionId = verano.getCookie('sessionId');
			
			// if the sessionId already exists
			if (existingSessionId) {

				// extend the expiration to 30 more minutes
				verano.setCookie('sessionId', existingSessionId, 0.020833);

			} else {
			
				// generate new sessionId if none exists or is expired
				var sessionId = Date.now() + '-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
				
				// set the cookie with a 30 minute expiration
				verano.setCookie('sessionId', sessionId, 0.020833);

				verano.gtm('session-start', {
					session_id: sessionId
				});

			}

		},
		isPassedAgeGate: function () {

			// the age gate is not shown for search engine bots
			const isSearchEngineBot = /Googlebot|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|LinkedInBot|Twitterbot|facebookexternalhit|Facebot|Pinterest|Slackbot-LinkExpanding|Discordbot|TelegramBot/i.test(navigator.userAgent);
			
			// the age gate is not shown on legal pages
			const isLegalPage = ['/privacy-policy', '/service-animal-policy', '/hipaa', '/terms-of-use', '/terms-of-service', '/accessibility', '/covid-19-response'].some(page => window.location.href.includes(page));
			
			// the age gate is not shown if the user has previously passed the age gate
			const isPassedAgeGate = verano.getCookie('resp-agev-age-verification-passed');

			if (isSearchEngineBot || isLegalPage || isPassedAgeGate) {
			document.documentElement.classList.add('passedAgeGate');
				return true;
			} else {
				return false;
			} 
		},
		insertHtml: function (html) {

			let insertHtmlDiv = document.createElement('div');
			insertHtmlDiv.innerHTML = html;
			document.body.insertBefore(insertHtmlDiv, document.body.firstChild);

		},
		insertStyle: function (style) {
			// insert the style into the head
			let insertStyleElement = document.createElement('style');
			insertStyleElement.textContent = style;
			document.head.appendChild(insertStyleElement);
		},
		insertCSSFile: function (cssFilePath) {
			// insert the css file into the head
			let insertCssFile = document.createElement("link");
			insertCssFile.rel = "stylesheet";
			insertCssFile.href = cssFilePath;
			document.head.appendChild(insertCssFile);
		},
		functions: function (functions) {
			// insert functions into the global verano object
			if (typeof functions === 'object') {
				for (var key in functions) {
					if (functions.hasOwnProperty(key)) {
						verano[key] = functions[key];
					}
				}
			}
		},
		data: function (data) {
			// insert data into the global verano object
			if (typeof data === 'object') {
				for (var key in data) {
					if (data.hasOwnProperty(key)) {
						verano[key] = data[key];
					}
				}
			}
		},
		gtm: function (action, data={}) {

			// get the sessionId from the cookie
			const sessionId = verano.getCookie('sessionId');

			// add the sessionId to the data
			data.session_id = sessionId;

			if (window.dataLayer) {
				window.dataLayer.push({'event': action, ...data});
			}
		},
		isGeoLocationGranted: async function () {

				try {

					const geo = await navigator.permissions.query({ name: 'geolocation' });
				
				if (geo.state === 'granted') {
					// sometimes the geolocation is not granted even though the navigator.permissions says it's granted
					return await verano.setGeoLocation();
				} else {
					verano.geolocationPermission = geo.state;
					return false;
				}
				
				} catch (error) {
					verano.geolocationPermission = 'denied';
					return false;
				}
		},
		setGeoLocation: async function () {

			return new Promise((resolve) => {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(
					(position) => {
						verano.userLocation = {
							active: true,
							latitude: position.coords.latitude,
							longitude: position.coords.longitude,
							type: 'geolocation',
							accuracy: 'Precise',
						};
						verano.geolocationPermission = 'granted';
						resolve(true);
					},
					(error) => {
						console.log(error);
						verano.geolocationPermission = 'denied';
						verano.geolocationPermissionErrorCode = error.code;
						resolve(false);
					},
					);
				} else {
					verano.geolocationPermission = 'denied';
					resolve(false);
				}
			});
		},
		loadAgeGate: async function () {

			/////////////////////////////////////////////////////
			// preloads all age gate data before page hydration
			/////////////////////////////////////////////////////

			try {

				verano.generateSessionId();

				fetch(`${verano.environmentUrl}/global-age-gate.js`).then(async response => {
					
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}

					const scriptText = await response.text();
					const scriptElement = document.createElement('script');
					scriptElement.text = scriptText;
					document.head.appendChild(scriptElement);

				}).catch(error => {
					console.error('There was a problem with the fetch operation:', error);
				});

				fetch(`${verano.environmentUrl}/api/locations/`)
					.then(response => response.ok ? response.json() : "error")
					.then(data => {
						verano.locations = data;
					}).catch(error => {
						console.log(error);
					});

				fetch(`${verano.environmentUrl}/api/time/`)
					.then(response => {
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.json();
					})
					.then(data => {
						verano.timeData = data;
					}).catch(error => {
						console.log(error);
					});
					
				var isGeoLocationGranted = await verano.isGeoLocationGranted();

				if (!isGeoLocationGranted) {

					var KM_TO_MI = 0.621371;

					var ipDataError = {
						geojson: false,
						maxmind: false
					}

					function checkForErrors() {

						// if both failed ip location services, set the error flag
						if (ipDataError.geojson && ipDataError.maxmind) {
							verano.ipDataError = true;
						}

					}

					fetch(`https://get.geojs.io/v1/ip/geo.json`)
					.then(response => response.ok ? response.json() : null)
					.then(data => {
						if (data && !verano.ipData) {

							// convert the accuracy from km to miles
							var accuracyMiles = Math.round(data.accuracy * KM_TO_MI);

							// if the accuracy is less than 100 miles, set the ip data
							if (accuracyMiles <= 100) {

								data.accuracy = {
									km: data.accuracy,
									mi: accuracyMiles
								};

								verano.ipData = data;
								return true;
							}
							
						}
						ipDataError.geojson = true;
						checkForErrors();
					}).catch(() => {
						ipDataError.geojson = true;
						checkForErrors();
					});

					fetch(`${verano.environmentUrl}/api/maxmind/`)
					.then(response => response.ok ? response.json() : null)
					.then(data => {
						console.log('Maxmind data:', data);

						if (data && !verano.ipData) {

							// convert the accuracy from km to miles
							var accuracyMiles = Math.round(data.location.accuracyRadius * KM_TO_MI);

							// if the accuracy is less than 100 miles, set the ip data
							if (accuracyMiles <= 100) {

								verano.ipData = {
									city: data.city.names.en,
									region: data.subdivisions[0].names.en,
									latitude: data.location.latitude.toString(),
									longitude: data.location.longitude.toString(),
									timezone: data.location.timeZone,
									country: data.country.names.en,
									accuracy: {
										km: data.location.accuracyRadius,
										mi: accuracyMiles
									}
								};

								return true;
							}
							
						}
						ipDataError.maxmind = true;
						checkForErrors();
					}).catch(() => {
						ipDataError.maxmind = true;
						checkForErrors();
					});

					// if the url has no-ip-location-detected, use set the timeout to 0 to show the fallback layout (for testing purposes)
					var timeout = window.location.href.includes('no-ip-location-detected') ? 0 : 2000;
					
					// if the ip data is not loaded after 2 seconds, set the ip data error to true
					setTimeout(() => {
						if (!verano.ipData) {
							verano.ipDataError = true;
						} 
					}, timeout);

				}
				
			} catch (error) {
				console.error('Fetch error:', error);
				return { locationsData: null, timeData: null, ipData: null, error: error.message };
			}
		}
	};

	///////////////////////////////////////////////////////////
	// EXECUTE ON PAGE LOAD 
	///////////////////////////////////////////////////////////

	// insert the data into the global verano object
	verano.host = verano.getHost();
	verano.device = verano.getDevice();
	verano.brand = verano.getBrand();
	verano.environmentUrl = verano.getEnvironmentUrl();
	verano.localhost = window.location.hostname === 'localhost';

	verano.insertStyle(`
		html,body {
			max-height: 100vh;
			overflow: hidden;
		}
		@keyframes _fadeIn {
			0% { opacity: 0; }
			100% { opacity: 1; }
		}
		body::before {
			content: ' ';
			position:fixed;
			top:0;
			left:0;
			width:100vw;
			height:100vh;
			z-index:999999996;
			background-color: ${verano.brand === "MUV" ? "white" : "black"};
			transition:opacity 300ms ease-out;
			opacity:0;
			animation: startFadeIn 0.8s ease-out forwards;
		}
		@keyframes startFadeIn {
			0% { opacity: 0; }
			100% { opacity: 0.7; }
		}
		body.finishFadeIn::before {
			animation: finishFadeIn 1s forwards;
		}
		@keyframes finishFadeIn {
			0% { opacity: 0.7; }
			100% { opacity: 0.95; }
		}	
		html.passedAgeGate, html.passedAgeGate body {
			max-height:none !important;
			overflow:auto !important;
		}
		html.passedAgeGate div#age-gate-wrapper, html.passedAgeGate body::before {
			display:none !important;
		}
		#age-gate-wrapper.theme-zld .font-body, #age-gate-wrapper.theme-zld {
			font-family: var(--font-body, '__afacadBody_c97616', '__afacadBody_Fallback_c97616', Afacad, san-serif);
		}
		#age-gate-wrapper.theme-zld .font-heading {
			font-family: var(--font-heading, '__jostHeading_fd782d', '__jostHeading_Fallback_fd782d', Jost, san-serif);
		}
		#age-gate-wrapper.theme-muv .font-body, #age-gate-wrapper.theme-muv {
			font-family: var(--font-body, "__DM_Sans_051075","__DM_Sans_Fallback_051075",sans-serif);
		}
		#age-gate-wrapper.theme-muv .font-heading {
			font-family: var(--font-heading, "__DM_Sans_a2ab43", "__DM_Sans_Fallback_a2ab43", sans-serif);
		}
	`);

	// if the user is not passed the age gate
	if (!verano.isPassedAgeGate()) {
		// if the host is sweed
		if (verano.host === 'Sweed' || verano.host === 'Jane') {

			// do not change this line, the filename is automatically inserted by the build script: /scripts/run-after-build.js
			var tailwindCssFile = `${verano.environmentUrl}/_next/static/css/***INSERT-TAILWIND-FILE-HERE***`;
			tailwindCssFile = `${verano.environmentUrl}/global-tailwind.css`;

			verano.insertCSSFile(tailwindCssFile);
		}
		// run the age gate script
		verano.loadAgeGate();
	}

}