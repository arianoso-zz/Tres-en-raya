var _0xd5d3=["\x68\x69\x64\x64\x65\x6E","\x72\x65\x6D\x6F\x76\x65\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x6F\x70\x63\x69\x6F\x6E\x31","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x6F\x70\x63\x69\x6F\x6E\x32","\x70\x72\x65\x67\x75\x6E\x74\x61","\x6D\x65\x6E\x73\x61\x6A\x65","\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74","\x48\x61\x7A\x20\x74\x75\x20\x70\x72\x69\x6D\x65\x72\x20\x6D\x6F\x76\x69\x6D\x69\x65\x6E\x74\x6F","\x74\x61\x62\x6C\x65\x72\x6F","\x6C\x65\x6E\x67\x74\x68","\x63\x65\x6C\x64\x61","","\x58","\x63\x6F\x6C\x6F\x72","\x73\x74\x79\x6C\x65","\x79\x65\x6C\x6C\x6F\x77","\x4F","\x72\x65\x64","\x4A\x75\x65\x67\x6F\x20\x79\x6F","\x4A\x75\x65\x67\x61\x73\x20\x74\xFA","\x54\x75\x72\x6E\x6F\x20\x64\x65\x6C\x20\x6A\x75\x67\x61\x64\x6F\x72\x20\x4F","\x54\x75\x72\x6E\x6F\x20\x64\x65\x6C\x20\x6A\x75\x67\x61\x64\x6F\x72\x20\x58","\x45\x73\x61\x20\x63\x65\x6C\x64\x61\x20\x79\x61\x20\x65\x73\x74\xE1\x20\x6F\x63\x75\x70\x61\x64\x61","\x45\x6D\x70\x61\x74\x65","\x6C\x6F\x67","\x48\x61\x73\x20\x67\x61\x6E\x61\x64\x6F\x21\x21\x21","\x4F\x72\x64\x65\x6E\x61\x64\x6F\x72\x20\x67\x61\x6E\x61","\x47\x61\x6E\x61\x20\x4A\x75\x67\x61\x64\x6F\x72\x20\x58","\x47\x61\x6E\x61\x20\x4A\x75\x67\x61\x64\x6F\x72\x20\x4F","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x4F\x66","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x66\x69\x6E\x61\x6C","\x3C\x62\x75\x74\x74\x6F\x6E\x20\x69\x64\x3D\x22\x70\x72\x65\x67\x75\x6E\x74\x61\x22\x20\x74\x79\x70\x65\x3D\x22\x62\x75\x74\x74\x6F\x6E\x22\x20\x6F\x6E\x63\x6C\x69\x63\x6B\x3D\x22\x72\x65\x73\x65\x74\x65\x61\x72\x28\x29\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x74\x6E\x20\x62\x74\x6E\x2D\x77\x61\x72\x6E\x69\x6E\x67\x22\x3E\x56\x6F\x6C\x76\x65\x72\x20\x61\x20\x6A\x75\x67\x61\x72\x3C\x2F\x62\x75\x74\x74\x6F\x6E\x3E"];
var mapa=[0,0,0,0,0,0,0,0,0];
var jugador=1;
var njugadores=0;
var eleccion=0;
var esquinas=[0,2,6,8];
function resetear()
{
	document[_0xd5d3[3]](_0xd5d3[2])[_0xd5d3[1]](_0xd5d3[0],_0xd5d3[0]);document[_0xd5d3[3]](_0xd5d3[5])[_0xd5d3[4]](_0xd5d3[0],_0xd5d3[0]);document[_0xd5d3[3]](_0xd5d3[6])[_0xd5d3[4]](_0xd5d3[0],_0xd5d3[0]);document[_0xd5d3[3]](_0xd5d3[7])[_0xd5d3[4]](_0xd5d3[0],_0xd5d3[0]);document[_0xd5d3[3]](_0xd5d3[7])[_0xd5d3[8]]= _0xd5d3[9];jugador= 1;njugadores= 0;eleccion= 0;mapa= [0,0,0,0,0,0,0,0,0];dibujar();document[_0xd5d3[3]](_0xd5d3[10])[_0xd5d3[4]](_0xd5d3[0],_0xd5d3[0])
}
function jugadores(_0x6696x8)
{
	njugadores= _0x6696x8;if(_0x6696x8== 1)
	{
		document[_0xd5d3[3]](_0xd5d3[5])[_0xd5d3[1]](_0xd5d3[0],_0xd5d3[0])
	}
	else 
	{
		jugando(1)
	}
	document[_0xd5d3[3]](_0xd5d3[2])[_0xd5d3[4]](_0xd5d3[0],_0xd5d3[0])
}
function jugando(_0x6696xa)
{
	eleccion= _0x6696xa;document[_0xd5d3[3]](_0xd5d3[10])[_0xd5d3[1]](_0xd5d3[0],_0xd5d3[0]);document[_0xd5d3[3]](_0xd5d3[5])[_0xd5d3[4]](_0xd5d3[0],_0xd5d3[0]);document[_0xd5d3[3]](_0xd5d3[7])[_0xd5d3[1]](_0xd5d3[0],_0xd5d3[0]);jugar()
}
function final()
{
	var _0x6696xc=0;
	for(var _0x6696xd=0;_0x6696xd< mapa[_0xd5d3[11]];_0x6696xd++)
	{
		if(mapa[_0x6696xd]== 0)
		{
			_0x6696xc++
		}
	}
	for(var _0x6696xe=0;_0x6696xe< 8;_0x6696xe+= 3)
	{
		if(mapa[_0x6696xe]== mapa[_0x6696xe+ 1]&& mapa[_0x6696xe+ 1]== mapa[_0x6696xe+ 2]&& mapa[_0x6696xe]> 0)
		{
			return mapa[_0x6696xe]
		}
	}
	for(var _0x6696xf=0;_0x6696xf< 3;_0x6696xf++)
	{
		if(mapa[_0x6696xf]== mapa[_0x6696xf+ 3]&& mapa[_0x6696xf+ 3]== mapa[_0x6696xf+ 6]&& mapa[_0x6696xf]> 0)
		{
			return mapa[_0x6696xf]
		}
	}
	if(mapa[0]== mapa[4]&& mapa[4]== mapa[8]&& mapa[0]> 0)
	{
		return mapa[0]
	}
	if(mapa[2]== mapa[4]&& mapa[4]== mapa[6]&& mapa[2]> 0)
	{
		return mapa[2]
	}
	if(_0x6696xc== 9)
	{
		return 9
	}
	if(_0x6696xc== 0)
	{
		return 0
	}
}
function dibujar()
{
	for(var _0x6696xd=0;_0x6696xd< 9;_0x6696xd++)
	{
		if(mapa[_0x6696xd]== 0)
		{
			document[_0xd5d3[3]](_0xd5d3[12]+ _0x6696xd)[_0xd5d3[8]]= _0xd5d3[13]
		}
		else 
		{
			if(mapa[_0x6696xd]== 1)
			{
				document[_0xd5d3[3]](_0xd5d3[12]+ _0x6696xd)[_0xd5d3[8]]= _0xd5d3[14];document[_0xd5d3[3]](_0xd5d3[12]+ _0x6696xd)[_0xd5d3[16]][_0xd5d3[15]]= _0xd5d3[17]
			}
			else 
			{
				document[_0xd5d3[3]](_0xd5d3[12]+ _0x6696xd)[_0xd5d3[8]]= _0xd5d3[18];document[_0xd5d3[3]](_0xd5d3[12]+ _0x6696xd)[_0xd5d3[16]][_0xd5d3[15]]= _0xd5d3[19]
			}
		}
	}
}
function fcelda(_0x6696x12)
{
	if(njugadores== 1)
	{
		if(eleccion== jugador)
		{
			document[_0xd5d3[3]](_0xd5d3[7])[_0xd5d3[8]]= _0xd5d3[20]
		}
		else 
		{
			document[_0xd5d3[3]](_0xd5d3[7])[_0xd5d3[8]]= _0xd5d3[21]
		}
	}
	else 
	{
		if(jugador== 1)
		{
			document[_0xd5d3[3]](_0xd5d3[7])[_0xd5d3[8]]= _0xd5d3[22]
		}
		else 
		{
			document[_0xd5d3[3]](_0xd5d3[7])[_0xd5d3[8]]= _0xd5d3[23]
		}
	}
	if(mapa[_0x6696x12]!= 0)
	{
		document[_0xd5d3[3]](_0xd5d3[7])[_0xd5d3[8]]= _0xd5d3[24]
	}
	else 
	{
		if(jugador== 1)
		{
			mapa[_0x6696x12]= 1;jugador= 2
		}
		else 
		{
			mapa[_0x6696x12]= 2;jugador= 1
		}
	}
	dibujar();switch(final())
	{
		case 0:document[_0xd5d3[3]](_0xd5d3[7])[_0xd5d3[8]]= _0xd5d3[25];pregunta();break
		case 1:console[_0xd5d3[26]](njugadores,eleccion);if(njugadores== 1)
		{
			if(eleccion== 1)
			{
				document[_0xd5d3[3]](_0xd5d3[7])[_0xd5d3[8]]= _0xd5d3[27]
			}
			else 
			{
				document[_0xd5d3[3]](_0xd5d3[7])[_0xd5d3[8]]= _0xd5d3[28]
			}
		}
		else 
		{
			document[_0xd5d3[3]](_0xd5d3[7])[_0xd5d3[8]]= _0xd5d3[29]
		}
		pregunta();break
		case 2:if(njugadores== 1)
		{
			if(eleccion== 2)
			{
				document[_0xd5d3[3]](_0xd5d3[7])[_0xd5d3[8]]= _0xd5d3[27]
			}
			else 
			{
				document[_0xd5d3[3]](_0xd5d3[7])[_0xd5d3[8]]= _0xd5d3[28]
			}
		}
		else 
		{
			document[_0xd5d3[3]](_0xd5d3[7])[_0xd5d3[8]]= _0xd5d3[30]
		}
		pregunta();break
		default:if(njugadores== 1&& jugador!= eleccion)
		{
			jugar()
		}
	}
}
function jugar()
{
	if(eleccion== 2)
	{
		if(jugador!= eleccion)
		{
			if(final()== 9)
			{
				fcelda(8)
			}
			else 
			{
				if(!jugadaganadora(1))
				{
					if(!jugadaganadora(2))
					{
						if(esigual(mapa,[0,2,0,0,0,0,0,0,1])|| esigual(mapa,[0,0,0,2,0,0,0,0,1])|| esigual(mapa,[0,0,0,0,0,2,0,0,1]))
						{
							fcelda(6)
						}
						else 
						{
							if(esigual(mapa,[0,0,0,0,0,0,0,2,1]))
							{
								fcelda(2)
							}
							else 
							{
								if(esigual(mapa,[2,0,0,0,0,0,0,0,1])|| esigual(mapa,[0,0,2,0,0,0,0,0,1]))
								{
									fcelda(6)
								}
								else 
								{
									if(esigual(mapa,[0,0,0,0,0,0,2,0,1]))
									{
										fcelda(2)
									}
									else 
									{
										if(mapa[4]== 0)
										{
											if(mapa[8]== 1&& (mapa[6]== 1|| mapa[2]== 1))
											{
												fcelda(4)
											}
										}
										else 
										{
											if(esigual(mapa,[0,0,0,0,2,0,0,0,1]))
											{
												fcelda(0)
											}
											else 
											{
												if(esigual(mapa,[1,0,2,0,2,0,0,0,1]))
												{
													fcelda(6)
												}
												else 
												{
													if(esigual(mapa,[1,0,0,0,2,0,2,0,1]))
													{
														fcelda(2)
													}
													else 
													{
														fcelda(mapa[_0xd5d3[31]](0))
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	else 
	{
		if(jugador== 2)
		{
			if(!jugadaganadora(2))
			{
				if(!jugadaganadora(1))
				{
					if(mapa[4]== 0)
					{
						fcelda(4)
					}
					else 
					{
						if(esigual(mapa,[0,0,0,0,1,0,0,0,0]))
						{
							fcelda(8)
						}
						else 
						{
							if((mapa[0]== 1|| mapa[2]== 1|| mapa[6]== 1|| mapa[8]== 1)&& mapa[1]== 0)
							{
								fcelda(1)
							}
							else 
							{
								if((mapa[0]== 1|| mapa[2]== 1|| mapa[6]== 1|| mapa[8]== 1)&& mapa[3]== 0)
								{
									fcelda(3)
								}
								else 
								{
									if(esigual(mapa,[0,1,0,0,2,0,0,1,0])|| esigual(mapa,[0,0,0,1,2,1,0,0,0]))
									{
										fcelda(2)
									}
									else 
									{
										fcelda(mapa[_0xd5d3[31]](0))
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
function jugadaganadora(_0x6696x8)
{
	var _0x6696x15=false;
	var _0x6696x16=[0,0,0];
	for(var _0x6696xe=0;_0x6696xe< 8;_0x6696xe+= 3)
	{
		_0x6696x16[0]= mapa[_0x6696xe];_0x6696x16[1]= mapa[_0x6696xe+ 1];_0x6696x16[2]= mapa[_0x6696xe+ 2];var _0x6696x17=_0x6696x16[_0xd5d3[31]](_0x6696x8);
		var _0x6696x18=_0x6696x16[_0xd5d3[32]](_0x6696x8);
		var _0x6696x19=_0x6696x16[_0xd5d3[31]](0);
		if(_0x6696x17!= _0x6696x18&& _0x6696x19!=  -1)
		{
			fcelda(_0x6696xe+ _0x6696x19);return true
		}
	}
	for(var _0x6696xf=0;_0x6696xf< 3;_0x6696xf++)
	{
		_0x6696x16[0]= mapa[_0x6696xf];_0x6696x16[1]= mapa[_0x6696xf+ 3];_0x6696x16[2]= mapa[_0x6696xf+ 6];var _0x6696x1a=_0x6696x16[_0xd5d3[31]](_0x6696x8);
		var _0x6696x1b=_0x6696x16[_0xd5d3[32]](_0x6696x8);
		var _0x6696x1c=_0x6696x16[_0xd5d3[31]](0);
		if(_0x6696x1a!= _0x6696x1b&& _0x6696x1c!=  -1)
		{
			fcelda(_0x6696xf+ _0x6696x1c* 3);return true
		}
	}
	_0x6696x16[0]= mapa[0];_0x6696x16[1]= mapa[4];_0x6696x16[2]= mapa[8];var _0x6696x1d=_0x6696x16[_0xd5d3[31]](0);
	if(_0x6696x16[_0xd5d3[31]](_0x6696x8)!= _0x6696x16[_0xd5d3[32]](_0x6696x8)&& _0x6696x1d!=  -1)
	{
		fcelda(_0x6696x1d* 4);return true
	}
	_0x6696x16[0]= mapa[2];_0x6696x16[1]= mapa[4];_0x6696x16[2]= mapa[6];_0x6696x1d= _0x6696x16[_0xd5d3[31]](0);if(_0x6696x16[_0xd5d3[31]](_0x6696x8)!= _0x6696x16[_0xd5d3[32]](_0x6696x8)&& _0x6696x1d!=  -1)
	{
		fcelda(2* _0x6696x1d+ 2);return true
	}
}
function esigual(_0x6696x1f,_0x6696x20)
{
	igual= true;for(var _0x6696xd=0;_0x6696xd< _0x6696x1f[_0xd5d3[11]];_0x6696xd++)
	{
		if(_0x6696x1f[_0x6696xd]!= _0x6696x20[_0x6696xd])
		{
			igual= false
		}
	}
	return igual
}
function pregunta()
{
	document[_0xd5d3[3]](_0xd5d3[34])[_0xd5d3[33]]= _0xd5d3[35]
}
