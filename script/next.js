	var a = 0;
	var b = 0;
	var c = 0;
	var d = 0;
	var e = 0;
	var f = 0;
	var g = 0;
	var h = 0;
	var i = 0;
	var total = 0;
	function nextTurn(n) {
		if (a + c == -2 && b == 0 && Math.random() < n ) {
			document.getElementById('12').src = 'images/x.png'
			b = -1
		} else if (e + i == -2 && a == 0 && Math.random() < n ) {
			document.getElementById('11').src = 'images/x.png'
			a = -1
		} else if (a + b == -2 && c == 0 && Math.random() < n ) {
			document.getElementById('13').src = 'images/x.png'
			c = -1
		} else if (a + e == -2 && i == 0 && Math.random() < n ) {
			document.getElementById('19').src = 'images/x.png'
			i = -1
		} else if (a + d == -2 && g == 0 && Math.random() < n ) {
			document.getElementById('17').src = 'images/x.png'
			g = -1
		} else if (a + i == -2 && e == 0 && Math.random() < n ) {
			document.getElementById('15').src = 'images/x.png'
			e = -1
		} else if (a + g == -2 && d == 0 && Math.random() < n ) {
			document.getElementById('14').src = 'images/x.png'
			d = -1
		} else if (b + c == -2 && a == 0 && Math.random() < n ) {
			document.getElementById('11').src = 'images/x.png'
			a = -1
		} else if (b + e == -2 && h == 0 && Math.random() < n ) {
			document.getElementById('18').src = 'images/x.png'
			h = -1
		} else if (b + h == -2 && e == 0 && Math.random() < n ) {
			document.getElementById('15').src = 'images/x.png'
			e = -1
		} else if (c + f == -2 && i == 0 && Math.random() < n ) {
			document.getElementById('19').src = 'images/x.png'
			i = -1
		} else if (c + i == -2 && f == 0 && Math.random() < n ) {
			document.getElementById('16').src = 'images/x.png'
			f = -1
		} else if (c + e == -2 && g == 0 && Math.random() < n ) {
			document.getElementById('17').src = 'images/x.png'
			g = -1
		} else if (c + g == -2 && e == 0 && Math.random() < n ) {
			document.getElementById('15').src = 'images/x.png'
			e = -1
		} else if (d + e == -2 && f == 0 && Math.random() < n ) {
			document.getElementById('16').src = 'images/x.png'
			f = -1
		} else if (d + f == -2 && e == 0 && Math.random() < n ) {
			document.getElementById('15').src = 'images/x.png'
			e = -1
		} else if (d + g == -2 && a == 0 && Math.random() < n ) {
			document.getElementById('11').src = 'images/x.png'
			a = -1
		} else if (f + e == -2 && d == 0 && Math.random() < n ) {
			document.getElementById('14').src = 'images/x.png'
			d = -1
		} else if (f + i == -2 && e == 0 && Math.random() < n ) {
			document.getElementById('13').src = 'images/x.png'
			c = -1
		} else if (f + d == -2 && e == 0 && Math.random() < n ) {
			document.getElementById('15').src = 'images/x.png'
			e = -1
		} else if (g + e == -2 && c == 0 && Math.random() < n ) {
			document.getElementById('13').src = 'images/x.png'
			c = -1
		} else if (g + h == -2 && i == 0 && Math.random() < n ) {
			document.getElementById('19').src = 'images/x.png'
			i = -1
		} else if (g + i == -2 && h == 0 && Math.random() < n ) {
			document.getElementById('18').src = 'images/x.png'
			h = -1
		} else if (g + d == -2 && a == 0 && Math.random() < n ) {
			document.getElementById('11').src = 'images/x.png'
			a = -1
		} else if (h == 1 && e == 0 && Math.random() < n ) {
			document.getElementById('15').src = 'images/x.png'
			e = -1
		} else if (b + d == -2 && a == 0 && Math.random() < n ) {
			document.getElementById('11').src = 'images/x.png'
			a = -1
		} else if (b + f == -2 && b + h + c == 0 && Math.random() < n ) {
			document.getElementById('13').src = 'images/x.png'
			c = -1
		} else if (h + d == -2 && g == 0 && i == 0 && a == 0 && Math.random() < n ) {
			document.getElementById('17').src = 'images/x.png'
			g = -1
		} else if (c + f == -2 && i == 0 && Math.random() < n ) {
			document.getElementById('19').src = 'images/x.png'
			i = -1
		} else if (d + f == -2 && a + b + h == 0 && h == 0 && Math.random() < n ) {
			document.getElementById('18').src = 'images/x.png'
			h = -1
		} else if (d + f == 0 && b + h == -2 && e == 0 && Math.random() < n ) {
			document.getElementById('15').src = 'images/x.png'
			e = -1
		} else if (e + d == -2 && f == 0 && Math.random() < n ) {
			document.getElementById('16').src = 'images/x.png'
			f = -1
		} else if (a + c == 2 && b == 0 && Math.random() < n ) {
			document.getElementById('12').src = 'images/x.png'
				b = -1
			}else if (e + i == 2 && a == 0 && Math.random() < n ) {
			document.getElementById('11').src = 'images/x.png'
			a = -1
		} else if (c + f == 2 && i == 0 && Math.random() < n ) {
			document.getElementById('19').src = 'images/x.png'
			i = -1
		} else if (a + i == 2 && e != 0 && b == 0 && Math.random() < n ) {
			document.getElementById('12').src = 'images/x.png'
			b = -1
		} else if (a + i == 2 && e != 0 && h == 0 && Math.random() < n ) {
			document.getElementById('12').src = 'images/x.png'
			b = -1
		} else if (g + c == 2 && e != 0 && d == 0 && Math.random() < n ) {
			document.getElementById('14').src = 'images/x.png'
			d = -1
		} else if (c + g == 2 && e != 0 && f == 0 && Math.random() < n ) {
			document.getElementById('16').src = 'images/x.png'
			f = -1
		} else if (e + d == 2 && f == 0 && Math.random() < n ) {
			document.getElementById('16').src = 'images/x.png'
			f = -1
		} else if (b + d + i == 3 && a + e == -2 && g == 0 && Math.random() < n ) {
			document.getElementById('17').src = 'images/x.png'
				g = -1
			}
		else if (c + i == 2 && f == 0 && Math.random() < n ) {
			document.getElementById('16').src = 'images/x.png'
			f = -1
		} else if (b + d == 2 && f == 0 && Math.random() < n ) {
			document.getElementById('11').src = 'images/x.png'
			a = -1
		} else if (e + i == 2 && a == 0 && Math.random() < n ) {
			document.getElementById('11').src = 'images/x.png'
			a = -1
		} else if (h + d == 2 && g == 0 && Math.random() < n ) {
			document.getElementById('17').src = 'images/x.png'
			g = -1
		} else if (h + f == 2 && i == 0 && Math.random() < n ) {
			document.getElementById('19').src = 'images/x.png'
			i = -1
		} else if (b + f == 2 && c == 0 && Math.random() < n ) {
			document.getElementById('13').src = 'images/x.png'
			c = -1
		} else if (a + b == 2 && c == 0 && Math.random() < n ) {
			document.getElementById('13').src = 'images/x.png'
			c = -1
		} else if (e + g == 2 && c == 0 && Math.random() < n ) {
			document.getElementById('13').src = 'images/x.png'
			c = -1
		} else if (e + h == 2 && b == 0 && Math.random() < n ) {
			document.getElementById('12').src = 'images/x.png'
			b = -1
		} else if (h + i == 2 && c == 0 && Math.random() < n ) {
			document.getElementById('17').src = 'images/x.png'
			g = -1
			i
		} else if (a + h == 2 && f == 0 && Math.random() < n ) {
			document.getElementById('16').src = 'images/x.png'
			f = -1
		} else if (c + h == 2 && d == 0 && Math.random() < n ) {
			document.getElementById('14').src = 'images/x.png'
			d = -1
		} else if (g + f == 2 && h == 0 && Math.random() < n ) {
			document.getElementById('18').src = 'images/x.png'
			h = -1
		} else if (a + f == 2 && b == 0 && Math.random() < n ) {
			document.getElementById('12').src = 'images/x.png'
			b = -1
		} else if (b + g == 2 && b == 0 && Math.random() < n ) {
			document.getElementById('14').src = 'images/x.png'
			d = -1
		} else if (b + i == 2 && f == 0 && Math.random() < n ) {
			document.getElementById('16').src = 'images/x.png'
			f = -1
		} else if (a + b == 2 && c == 0 && Math.random() < n ) {
			document.getElementById('13').src = 'images/x.png'
			b = -1
		} else if (a + c == 2 && b == 0 && Math.random() < n ) {
			document.getElementById('12').src = 'images/x.png'
			b = -1
		} else if (a + e == 2 && g == 0 && i == 0 && Math.random() < n ) {
			document.getElementById('19').src = 'images/x.png'
			i = -1
		} else if (a + d == 2 && g == 0 && Math.random() < n ) {
			document.getElementById('17').src = 'images/x.png'
			g = -1
		} else if (a + i == 2 && e == 0 && Math.random() < n ) {
			document.getElementById('15').src = 'images/x.png'
			e = -1
		} else if (a + g == 2 && d == 0 && Math.random() < n ) {
			document.getElementById('14').src = 'images/x.png'
			d = -1
		} else if (b + c == 2 && a == 0 && Math.random() < n ) {
			document.getElementById('11').src = 'images/x.png'
			a = -1
		} else if (b + e == 2 && h == 0 && Math.random() < n ) {
			document.getElementById('18').src = 'images/x.png'
			h = -1
		} else if (b + h == 2 && e == 0 && Math.random() < n ) {
			document.getElementById('15').src = 'images/x.png'
			e = -1
		} else if (c + f == 2 && i == 0 && Math.random() < n ) {
			document.getElementById('19').src = 'images/x.png'
			i = -1
		} else if (c + i == 2 && f == 0 && Math.random() < n ) {
			document.getElementById('16').src = 'images/x.png'
			f = -1
		} else if (c + e == 2 && g == 0 && Math.random() < n ) {
			document.getElementById('17').src = 'images/x.png'
			g = -1
		} else if (c + g == 2 && e == 0 && Math.random() < n ) {
			document.getElementById('15').src = 'images/x.png'
			e = -1
		} else if (d + e == 2 && f == 0 && Math.random() < n ) {
			document.getElementById('16').src = 'images/x.png'
			f = -1
		} else if (d + f == 2 && e == 0 && Math.random() < n ) {
			document.getElementById('15').src = 'images/x.png'
			e = -1
		} else if (d + g == 2 && a == 0 && Math.random() < n ) {
			document.getElementById('11').src = 'images/x.png'
			a = -1
		} else if (f + e == 2 && d == 0 && Math.random() < n ) {
			document.getElementById('14').src = 'images/x.png'
			d = -1
		} else if (f + i == 2 && e == 0 && Math.random() < n ) {
			document.getElementById('13').src = 'images/x.png'
			c = -1
		} else if (f + d == 2 && e == 0 && Math.random() < n ) {
			document.getElementById('15').src = 'images/x.png'
			e = -1
		} else if (g + e == 2 && c == 0 && Math.random() < n ) {
			document.getElementById('13').src = 'images/x.png'
			c = -1
		} else if (g + h == 2 && i == 0 && Math.random() < n ) {
			document.getElementById('19').src = 'images/x.png'
			i = -1
		} else if (g + i == 2 && h == 0 && Math.random() < n ) {
			document.getElementById('18').src = 'images/x.png'
			h = -1
		} else if (g + d == 2 && a == 0 && Math.random() < n ) {
			document.getElementById('11').src = 'images/x.png'
			a = -1
		} else if (h == 1 && e == 0 && Math.random() < n ) {
			document.getElementById('15').src = 'images/x.png'
			e = -1
		} else if (b + d == 2 && a == 0 && Math.random() < n ) {
			document.getElementById('11').src = 'images/x.png'
			a = -1
		} else if (b + f == 2 && b + h + c == 0 && Math.random() < n ) {
			document.getElementById('13').src = 'images/x.png'
			c = -1
		} else if (h + d == 2 && g == 0 && a == 0 && i == 0 && Math.random() < n ) {
			document.getElementById('17').src = 'images/x.png'
			g = -1
		} else if (h + f == 2 && i == 0 && Math.random() < n ) {
			document.getElementById('19').src = 'images/x.png'
			i = -1
		} else if (d + f == 2 && a + b + h == 0 && h == 0 && Math.random() < n ) {
			document.getElementById('18').src = 'images/x.png'
			h = -1
		} else if (d + f == 0 && b + h == 2 && e == 0 && Math.random() < n ) {
			document.getElementById('15').src = 'images/x.png'
			e = -1
		} else if (e + d == 2 && f == 0 && Math.random() < n ) {
			document.getElementById('16').src = 'images/x.png'
			f = -1
		} else if (a + b == 2 && c == 0 && Math.random() < n ) {
			document.getElementById('13').src = 'images/x.png'
			c = -1
		} else if (e == 0 && Math.random() < n ) {
			document.getElementById('15').src = 'images/x.png'
			e = -1
		} else if (e == 1 && a == 0 && Math.random() < n ) {
			document.getElementById('11').src = 'images/x.png'
			a = -1
		} else if (a == 1 && i == 0 && Math.random() < n ) {
			document.getElementById('19').src = 'images/x.png'
			i = -1
		} else if (b == 1 && f == 0 && Math.random() < n ) {
			document.getElementById('16').src = 'images/x.png'
			f = -1
		} else if (c == 1 && g == 0 && Math.random() < n ) {
			document.getElementById('17').src = 'images/x.png'
			g = -1
		} else if (d == 1 && e == 0 && Math.random() < n ) {
			document.getElementById('15').src = 'images/x.png'
			d = -1
		} else if (f == 1 && e == 0 && Math.random() < n ) {
			document.getElementById('15').src = 'images/x.png'
			e = -1
		} else if (g == 1 && c == 0 && Math.random() < n ) {
			document.getElementById('13').src = 'images/x.png'
			c = -1
		} else if (h == 1 && e == 0 && Math.random() < n ) {
			document.getElementById('15').src = 'images/x.png'
			e = -1
		} else if (i == 1 && a == 0 && Math.random() < n ) {
			document.getElementById('11').src = 'images/x.png'
			a = -1
		} else if (a == 0) {
			document.getElementById('11').src = 'images/x.png'
			a = -1
		} else if (b == 0) {
			document.getElementById('12').src = 'images/x.png'
			b = -1
		} else if (c == 0) {
			document.getElementById('13').src = 'images/x.png'
			c = -1
		} else if (d == 0) {
			document.getElementById('14').src = 'images/x.png'
			d = -1
		} else if (e == 0) {
			document.getElementById('15').src = 'images/x.png'
			e = -1
		} else if (f == 0) {
			document.getElementById('16').src = 'images/x.png'
			f = -1
		} else if (g == 0) {
			document.getElementById('17').src = 'images/x.png'
			g = -1
		} else if (h == 0) {
			document.getElementById('18').src = 'images/x.png'
			h = -1
		} else if (i == 0) {
			document.getElementById('19').src = 'images/x.png'
			i = -1
		}
		if (a != 0) {
			document.getElementById("a").style.pointerEvents = "none";
		}
		if (b != 0) {
			document.getElementById("b").style.pointerEvents = "none";
		}
		if (c != 0) {
			document.getElementById("c").style.pointerEvents = "none";
		}
		if (d != 0) {
			document.getElementById("d").style.pointerEvents = "none";
		}
		if (e != 0) {
			document.getElementById("e").style.pointerEvents = "none";
		}
		if (f != 0) {
			document.getElementById("f").style.pointerEvents = "none";
		}
		if (g != 0) {
			document.getElementById("g").style.pointerEvents = "none";
		}
		if (h != 0) {
			document.getElementById("h").style.pointerEvents = "none";
		}
		if (i != 0) {
			document.getElementById("i").style.pointerEvents = "none";
		}

		if (a + b + c == 3 || d + e + f == 3 || g + h + i == 3
				|| a + d + g == 3 || b + e + h == 3 || c + f + i == 3
				|| a + e + i == 3 || c + e + g == 3) {
			document.getElementById('score').src = "images/win.png"
			document.getElementById('scoreboard').style.visibility = "visible"
			document.getElementById('score').style.visibility = "visible"
			document.getElementById('scoreButton').style.visibility = "visible"

		} else if (a + b + c == -3 || d + e + f == -3 || g + h + i == -3
				|| a + d + g == -3 || b + e + h == -3 || c + f + i == -3
				|| a + e + i == -3 || c + e + g == -3) {
			document.getElementById('score').src = "images/lose.png"
			document.getElementById('scoreboard').style.visibility = "visible"
			document.getElementById('score').style.visibility = "visible"
			document.getElementById('scoreButton').style.visibility = "visible"
		} else if (a + b + c + d + e + f + g + h + i == 1
				&& (a != 0 && b != 0 && c != 0 && d != 0 && e != 0 && f != 0
						&& g != 0 && h != 0 && i != 0)) {
			document.getElementById('score').src = "images/tie.png"
			document.getElementById('scoreboard').style.visibility = "visible"
			document.getElementById('score').style.visibility = "visible"
			document.getElementById('scoreButton').style.visibility = "visible"

		}
	}