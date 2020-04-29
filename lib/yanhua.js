// JavaScript Document
window.requestAnimFrame = ( function() {
	return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function( callback ) {
					window.setTimeout( callback, 1000 / 10 );
				};
})();

// 现在我们将为演示设置我们的基本变量
var canvas = document.getElementById( 'canvas' ),
		ctx = canvas.getContext( '2d' ),
		// 全屏幕尺寸
		cw = window.innerWidth,
		ch = window.innerHeight*0.80,
		// 烟花序列
		fireworks = [],
		// 粒子的集合
		particles = [],
		// 开始色调
		hue = 120,
		// when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
		limiterTotal = 5,
		limiterTick = 0,
		// this will time the auto launches of fireworks, one launch per 80 loop ticks
		timerTotal = 80,
		timerTick = 0,
		mousedown = false,
		// mouse x coordinate,
		mx,
		// mouse y coordinate
		my;
		
// 设置画布尺寸
canvas.width = cw;
canvas.height = ch;

// 现在我们要建立我们的整个演示功能的占位符

// 在一个范围内得到一个随机数 
function random( min, max ) {
	return Math.random() * ( max - min ) + min;
}

// 计算两点间的距离
function calculateDistance( p1x, p1y, p2x, p2y ) {
	var xDistance = p1x - p2x,
			yDistance = p1y - p2y;
	return Math.sqrt( Math.pow( xDistance, 2 ) + Math.pow( yDistance, 2 ) );
}

// 创造烟花
function Firework( sx, sy, tx, ty ) {
	// 实际坐标 
	this.x = sx;
	this.y = sy;
	// 起始坐标
	this.sx = sx;
	this.sy = sy;
	// 目标坐标
	this.tx = tx;
	this.ty = ty;
	// 从起点到目标的距离 
	this.distanceToTarget = calculateDistance( sx, sy, tx, ty );
	this.distanceTraveled = 0;
	//跟踪每一个烟花的过去坐标，以创建一个跟踪效果，增加坐标数，以创建更突出的路径
	this.coordinates = [];
	this.coordinateCount = 3;
	// 用当前坐标填充初始坐标集合
	while( this.coordinateCount-- ) {
		this.coordinates.push( [ this.x, this.y ] );
	}
	this.angle = Math.atan2( ty - sy, tx - sx );
	this.speed = 2;
	this.alpha = 0;
	this.decay = random( 0.005, 0.006 );
	
	this.acceleration = 1.05;
	this.brightness = random( 50, 70 );
	// 圆目标指示器半径
	this.targetRadius = 1;
}

// 更新的烟花
Firework.prototype.update = function( index ) {
	// 坐标数组中的最后项删除
	this.coordinates.pop();
	// 将当前坐标添加到数组的开始
	this.coordinates.unshift( [ this.x, this.y ] );
	
	// cycle the circle target indicator radius 循环圆靶指示半径 
	if( this.targetRadius < 8 ) {
		this.targetRadius += 0.3;
	} else {
		this.targetRadius = 1;
	}
	
	// 加速烟火
	this.speed *= this.acceleration;
	// 以角度和速度得到当前速度 
	var vx = Math.cos( this.angle ) * this.speed,
		vy = Math.sin( this.angle ) * this.speed;
	// 到目前为止，烟花会有多快的速度去运行？
	this.distanceTraveled = calculateDistance( this.sx, this.sy, this.x + vx, this.y + vy );
	
	// 如果距离旅行，包括速度，是大于初始距离的目标，那么目标已达到
	if( this.distanceTraveled >= this.distanceToTarget ) {
		createParticles( this.tx, this.ty );
		// 删除烟花，使用索引传递到更新函数，以确定该删除
		fireworks.splice( index, 1 );
	} else {
		// 目标没有达到，继续运行
		this.x += vx;
		this.y += vy;
	}
}

// 画烟花 
Firework.prototype.draw = function() {
	ctx.beginPath();
	// 移动到最后一个跟踪坐标，然后画一条线到当前的X-和
	var staX=this.coordinates[ this.coordinates.length - 1][ 0 ];
	var staY=this.coordinates[ this.coordinates.length - 1][ 1 ];
	ctx.moveTo( staX, staY );
	ctx.lineTo( this.x, this.y );
	if(this.alpha <= 1){
	ctx.strokeStyle = 'hsla(' + hue + ', 100%, ' + this.brightness + '%,' + this.alpha + ')';
	this.alpha+=this.decay;
	ctx.stroke();
}
	ctx.beginPath();
	// draw the target for this firework with a pulsing circle
	//ctx.arc( this.tx, this.ty, this.targetRadius, 0, Math.PI * 2 );
	ctx.stroke();
}

// 创建粒子
function Particle( x, y ) {
	this.x = x;
	this.y = y;
	// 跟踪每一个粒子的过去坐标，创建一个跟踪效果，增加坐标数，以创建更为显著的路径
	this.coordinates = [];
	this.coordinateCount = 5;
	while( this.coordinateCount-- ) {
		this.coordinates.push( [ this.x, this.y ] );
	}
	// 在所有可能的方向设置一个任意角度、弧度 
	this.angle = random( 0, Math.PI * 2 );
	this.speed = random( 1, 10 );
	// 摩擦会减缓粒子的下降
	this.friction = 0.95;
	//重力将被施加和拉的颗粒
	this.gravity = 1;
	// 设置为一个随机数+ - 20的整体色调变量的色调
	this.hue = random( hue - 30, hue + 30 );
	this.brightness = random( 20, 80 );
	this.alpha = 1;
	// 设置粒子的速度快 
	this.decay = random( 0.015, 0.03 );
	//this.alpha
}

// 更新粒子
Particle.prototype.update = function( index ) {
	// 坐标数组中的最后项删除
	this.coordinates.pop();
	// add current coordinates to the start of the array
	this.coordinates.unshift( [ this.x, this.y ] );
	// slow down the particle
	this.speed *= this.friction;
	// apply velocity
	this.x += Math.cos( this.angle ) * this.speed;
	this.y += Math.sin( this.angle ) * this.speed + this.gravity;
	// fade out the particle
	this.alpha -= this.decay;
	
	// remove the particle once the alpha is low enough, based on the passed in index
	if( this.alpha <= this.decay ) {
		particles.splice( index, 1 );
	}
}

// 绘制粒子
Particle.prototype.draw = function() {
	ctx. beginPath();
	// 移动到最后一个跟踪坐标，然后画一条线到当前的X-和
	ctx.moveTo( this.coordinates[ this.coordinates.length - 1 ][ 0 ], this.coordinates[ this.coordinates.length - 1 ][ 1 ] );
	ctx.lineTo( this.x, this.y );
	ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
	ctx.stroke();
}

// 创建粒子群/爆炸
function createParticles( x, y ) {
	// 增加粒子计数更大的爆炸，注意帆布性能的增加而增加的颗粒
	var particleCount = 30;
	while( particleCount-- ) {
		particles.push( new Particle( x, y ) );
	}
}

// 主要演示环
function loop() {
	// 这个函数将requestanimationframe没完没了地跑
	requestAnimFrame( loop );
	
	// 增加色调，以获得不同的彩色烟花随着时间的推移
	hue += 0.5;
	
	// 通常情况下，clearrect()将用于清除画布
	// 我们想创造一个尾随效果
	// 设置复合操作的目的地，将使我们能够清晰的画布，在一个特定的不透明度，而不是完全清除 
	ctx.globalCompositeOperation = 'destination-out';
	// decrease the alpha property to create more prominent trails
	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
	ctx.fillRect( 0, 0, cw, ch );
	// 降低阿尔法属性以创建更为显著的路径
	//打火机创造明亮的亮点，因为烟花和颗粒重叠彼此
	ctx.globalCompositeOperation = 'lighter';
	
	// 循环过每一个烟花，画它，更新它
	var i = fireworks.length;
	while( i-- ) {
		fireworks[ i ].draw();
		fireworks[ i ].update( i );
	}
	
	// 循环过每一个粒子，画它，更新它
	var i = particles.length;
	while( i-- ) {
		this.hue = random( hue - 30, hue + 30 );
		particles[ i ].draw();
		particles[ i ].update( i );
	}
	
	// 当鼠标不在时，可以自动地发射烟花到任意坐标
	if( timerTick >= timerTotal ) {
		if( !mousedown ) {
			// 开始在屏幕底部的烟花，然后设置随机目标坐标，随机坐标将设置在屏幕的前半部分
			var stX= random((cw / 2)-210,(cw / 2)+210)
			fireworks.push( new Firework( stX, ch, random( 0, cw ), random( 0, ch / 2 ) ) );
			timerTick=60;
		}
	} else {
		timerTick++;
	}
	
	// 当老鼠被放下来的时候，放烟火的限制
	if( limiterTick >= limiterTotal ) {
		if( mousedown ) {
			// 开始在屏幕底部的烟花，然后设置当前鼠标坐标为目标
			fireworks.push( new Firework( cw / 2, ch, mx, my ) );
			//limiterTick = 0;
		}
	} else {
		limiterTick++;
	}
}

//鼠标事件绑定 
// 更新MouseMove鼠标坐标 
canvas.addEventListener( 'mousemove', function( e ) {
	mx = e.pageX - canvas.offsetLeft;
	my = e.pageY - canvas.offsetTop;
});

//切换鼠标按下状态和防止帆布被选择
canvas.addEventListener( 'mousedown', function( e ) {
	e.preventDefault();
	mousedown = true;
});

canvas.addEventListener( 'mouseup', function( e ) {
	e.preventDefault();
	mousedown = false;
});

// 一旦窗口负载，我们准备一些烟花！
window.onload = loop;