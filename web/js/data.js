$(document).ready(function () {
				rutasByID =	{
					
					"1":
						{
							"nombre": "Ruta Terminal",
							"geom": "LINESTRING (-8894589.1221056003000000 -237751.4048051199900000, -8894479.2438773997000000 -237667.8018054399900000, -8894389.6692348998000000 -237787.2346621200000000, -8894243.9611498006000000 -237984.2988756400000000, -8894243.9611498006000000 -237997.4364898800000000, -8894273.8193640001000000 -238021.3230612099900000, -8894347.8677351009000000 -237930.5540901400100000, -8894419.5274490993000000 -237983.1045470800000000)",
							"color": "#00ff00",
							"descripcion": "&nbsp;Ruta Terminal<p></p>"
						},
					
					"2":
						{
							"nombre": "Ruta ALborada",
							"geom": "LINESTRING (-8894254.1129426006000000 -238215.4014533100100000, -8894180.0645714998000000 -238158.0736820999900000, -8894237.3923426997000000 -238072.0820252900000000, -8894203.9511427991000000 -238038.6408254200100000, -8894146.6233715992000000 -238122.2438250900000000, -8893733.3856875002000000 -237823.6616833999900000, -8893525.5725168996000000 -238093.5799394900100000, -8892985.7360047009000000 -237704.2288267200100000)",
							"color": "#ff0000",
							"descripcion": "Ruta ALborada<p></p>"
						},
					
					"9":
						{
							"nombre": "Ruta 33",
							"geom": "LINESTRING (-8894282.1796639673000000 -237934.7342401150400000, -8894277.4023496676000000 -238071.4848610050400000, -8894064.2147004660000000 -238109.1062108650500000, -8893976.4315508660000000 -238055.9585896450400000, -8894009.8727506660000000 -237964.5924542850400000, -8894129.9027716666000000 -237910.8476687750400000, -8894248.1412997674000000 -237889.9469188650500000)",
							"color": "#333300",
							"descripcion": "<p></p>"
						},
					
					"10":
						{
							"nombre": "ruta direccion",
							"geom": "LINESTRING (-8894250.5299568996000000 -238212.4156318900100000, -8893990.7634935994000000 -238013.5599255200100000, -8893913.7293011006000000 -237955.0378257500100000, -8893855.8043655995000000 -237910.2505044899900000, -8893876.7051155008000000 -237880.3922903199900000, -8893904.7718368005000000 -237897.7100545399900000, -8893909.5491511002000000 -237901.2930402400100000)",
							"color": "#000000",
							"descripcion": "<p></p>"
						},
					
					"11":
						{
							"nombre": "Ruta Terminal - Av. Americas",
							"geom": "LINESTRING (-8891984.2915014997000000 -238562.0553198100000000, -8891998.0262800008000000 -238523.8368056700000000, -8892046.9937511999000000 -238470.6891844499900000, -8892213.6025862992000000 -238406.7926061300100000, -8892359.3106715009000000 -238354.2421491899900000, -8892454.2597924992000000 -238316.0236350499900000, -8892484.1180067006000000 -238284.9710923100100000, -8892546.2230922002000000 -238423.5132060599900000, -8892647.1438561007000000 -238616.3972696000100000, -8892734.9270057008000000 -238785.3947618000100000, -8892795.8377625998000000 -238903.6332899100100000, -8892880.0379265007000000 -239068.1520500000000000, -8892896.7585265003000000 -239129.9585533200000000, -8892914.6734549999000000 -239197.4381173499900000, -8892926.6167405993000000 -239277.4581313199900000)",
							"color": "#000080",
							"descripcion": "<p></p>"
						},
					
					"12":
						{
							"nombre": "Ruta Alborada",
							"geom": "LINESTRING (-8894591.2121804003000000 -237749.3147301200100000, -8894414.4515525997000000 -237620.3272448999900000, -8894246.6483888999000000 -237498.5057310900000000, -8894161.8510606997000000 -237430.4290027800000000, -8894106.9119466003000000 -237389.2246672300100000, -8894079.4423896000000000 -237385.0445172500000000, -8894016.1429754999000000 -237465.6616954999900000, -8893964.1896829009000000 -237532.5440952400100000, -8893903.2789260000000000 -237606.5924663800100000, -8893863.2689190004000000 -237657.9485947600000000, -8893745.6275552008000000 -237809.0311584500000000, -8893677.5508268997000000 -237898.0086366800000000, -8893630.9720127005000000 -237958.3222293000100000, -8893590.3648415003000000 -238009.0811933900100000, -8893543.7860273998000000 -238067.0061288799900000, -8893516.9136346001000000 -238096.8643430499900000, -8893586.1846914999000000 -238144.6374857200100000, -8893678.7451553997000000 -238214.5057068800100000, -8893760.5566622000000000 -238274.2221352200100000, -8893842.3681690991000000 -238336.9243849700100000, -8893923.5825116001000000 -238397.2379775999900000, -8894004.7968541998000000 -238455.7600773700100000, -8894061.5274611004000000 -238499.9502343400100000)",
							"color": "#008000",
							"descripcion": "Ruta Alborada<p></p>"
						},
					
				};
				paradasByID = {
					
					"2":
						{
							"ruta": "Ruta Terminal",
							"nombre": "Parada 1",
							"direccion": "Alborada 5 etapa",
							"info_adicional": "pasa cada 5 min",
							"geom": "POINT (-8894340.1045993995000000 -237925.1796115800100000)",
							"icono": "web/images/marker/parking.png",
							"descripcion": "07H00<p></p>"
						},
					
					"4":
						{
							"ruta": "Ruta ALborada",
							"nombre": "Comida Rapida",
							"direccion": "Alborada 5 etapa",
							"info_adicional": "07H00",
							"geom": "POINT (-8894055.8544005994000000 -238047.0011253900000000)",
							"icono": "web/images/marker/restaurant.png",
							"descripcion": "Comida Rapida<p></p>"
						},
					
					"5":
						{
							"ruta": "Ruta ALborada",
							"nombre": "Cafeteria",
							"direccion": "Alborada 5 etapa",
							"info_adicional": "",
							"geom": "POINT (-8893753.6892731003000000 -237818.8843691300100000)",
							"icono": "web/images/marker/coffee.png",
							"descripcion": "Cafeteria<p></p>"
						},
					
					"6":
						{
							"ruta": "Ruta ALborada",
							"nombre": "parqueo",
							"direccion": "Alborada 5 etapa",
							"info_adicional": "",
							"geom": "POINT (-8894349.6592280008000000 -238116.2721822600000000)",
							"icono": "web/images/marker/default.png",
							"descripcion": "<p></p>"
						},
					
					"7":
						{
							"ruta": "Ruta Terminal - Av. Americas",
							"nombre": "Terminal",
							"direccion": "Terminal Terrestre",
							"info_adicional": "cada 10 min",
							"geom": "POINT (-8891977.1255299654000000 -238565.9368876474600000)",
							"icono": "web/images/marker/default.png",
							"descripcion": "<p></p>"
						},
					
					"8":
						{
							"ruta": "Ruta Terminal - Av. Americas",
							"nombre": "Avicola Fernandez",
							"direccion": "Avicola Fernandez",
							"info_adicional": "111H00",
							"geom": "POINT (-8892620.2714631334000000 -238537.8701663406700000)",
							"icono": "web/images/marker/default.png",
							"descripcion": "<p></p>"
						},
					
					"9":
						{
							"ruta": "Ruta Terminal - Av. Americas",
							"nombre": "Mi Comisariato",
							"direccion": "Mi Comisariato",
							"info_adicional": "",
							"geom": "POINT (-8892754.6334269997000000 -238804.2054367400100000)",
							"icono": "web/images/marker/default.png",
							"descripcion": "<p></p>"
						},
					
					"10":
						{
							"ruta": "Ruta Terminal - Av. Americas",
							"nombre": "Trasnportes Esmeraldas",
							"direccion": "Trasnportes Esmeraldas",
							"info_adicional": "",
							"geom": "POINT (-8892917.6592763998000000 -239182.2104281300000000)",
							"icono": "web/images/marker/default.png",
							"descripcion": "<p></p>"
						},
					
					"11":
						{
							"ruta": "Ruta Terminal - Av. Americas",
							"nombre": "Av. Americas",
							"direccion": "Av. Americas",
							"info_adicional": "",
							"geom": "POINT (-8892930.7968907002000000 -239269.9935777800000000)",
							"icono": "web/images/marker/default.png",
							"descripcion": "<p></p>"
						},
					
					"12":
						{
							"ruta": "Ruta ALborada",
							"nombre": "Parada Inicial",
							"direccion": "Benjamin Carrion Mora",
							"info_adicional": "pasa cada 20 min",
							"geom": "POINT (-8894576.5816555992000000 -237750.5090586800100000)",
							"icono": "web/images/marker/default.png",
							"descripcion": "Parada Inicial<p></p>"
						},
					
					"13":
						{
							"ruta": "Ruta Alborada",
							"nombre": "Parada 2",
							"direccion": "Benjamin Carrion Mora",
							"info_adicional": "pasa cada 5 min",
							"geom": "POINT (-8894108.4048574008000000 -237385.0445172500000000)",
							"icono": "web/images/marker/parking.png",
							"descripcion": "Parada 2<p></p>"
						},
					
					"14":
						{
							"ruta": "Ruta Alborada",
							"nombre": "Parada Final",
							"direccion": "Jose Maria Roura",
							"info_adicional": "07H00",
							"geom": "POINT (-8894057.6458933000000000 -238493.3814272200100000)",
							"icono": "web/images/marker/parking.png",
							"descripcion": "Parada Final<p></p>"
						},
					
				};
	agregarRutas();
	agregarParadas();
});