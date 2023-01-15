var specific_price_touringcar = {};

(function(){
	 
	// CONSTRUCTOR ********************************************************************
	// CONSTRUCTOR ********************************************************************
	// CONSTRUCTOR ********************************************************************
	// CONSTRUCTOR ********************************************************************
	 
	this.onready = function() {

	};

	// METHODS  *****************************************************************
	// METHODS *****************************************************************
	// METHODS ******************************************************************
	// METHODS ******************************************************************
	
	/*
	Transport Price
	*/
	this.calculate = function(
		_category,
		_transport_type,
		_count_persons,
		_transport_period
	) {

		var _transport_price = 0;

		switch(
			_category
		) {

			/*
			Bedrijf ******************************************
			Bedrijf ******************************************
			Bedrijf ******************************************
			Bedrijf ******************************************
			*/
			default:
			case 'company':
		
				switch(_transport_type) {

						case 'eigenvervoer':
						break;

						/*
						Touringcar (inclusief) ******
						Touringcar (inclusief) ******
						Touringcar (inclusief) ******
						Touringcar (inclusief) ******
						*/
						case 'touringcar-inclusive':

							if(
								_count_persons >= 0 && 
								_count_persons <= 50
							) {
								
								switch(_transport_period) {

									case 4:
										_transport_price = 4265;
									break;
									case 5:
										_transport_price = 4775;
									break;
									case 6:
										_transport_price = 5285;
									break;
									case 7:
										_transport_price = 5795;
									break;
									case 8:
										_transport_price = 6295;
									break;
									case 9:
										_transport_price = 6805;
									break;

								}

							}

							if(
								_count_persons >= 51 && 
								_count_persons < 54
							) {

								switch(_transport_period) {

									case 4:
										_transport_price = 4385;
									break;
									case 5:
										_transport_price = 4895;
									break;
									case 6:
										_transport_price = 5405;
									break;
									case 7:
										_transport_price = 5915;
									break;
									case 8:
										_transport_price = 6425;
									break;
									case 9:
										_transport_price = 6935;
									break;

								}

							}

							if(
								_count_persons >= 54 && 
								_count_persons < 60
							) {

								switch(_transport_period) {

									case 4:
										_transport_price = 4915;
									break;
									case 5:
										_transport_price = 5485;
									break;
									case 6:
										_transport_price = 6055;
									break;
									case 7:
										_transport_price = 6625;
									break;
									case 8:
										_transport_price = 7195;
									break;
									case 9:
										_transport_price = 7765;
									break;

								}

							}

							if(
								_count_persons >= 60 && 
								_count_persons <= 87
							) {

								switch(_transport_period) {

									case 4:
										_transport_price = 5965;
									break;
									case 5:
										_transport_price = 6595;
									break;
									case 6:
										_transport_price = 7235;
									break;
									case 7:
										_transport_price = 7865;
									break;
									case 8:
										_transport_price = 8495;
									break;
									case 9:
										_transport_price = 9125;
									break;

								}

							}

						break;

					}

				break;

				/*
				School / Studenten ******************************************
				School / Studenten ******************************************
				School / Studenten ******************************************
				School / Studenten ******************************************
				*/
				case 'studenten':
				case 'school':

					if(_transport_type == 'touringcar-shared') {

						_shared_price = 0;

						if(
							_count_persons >= 1 &&
							_count_persons <= 19
						) {
							_shared_price = 160;
						}

						if(
							_count_persons >= 20 &&
							_count_persons <= 24
						) {
							_shared_price = 155;
						}

						if(
							_count_persons >= 25 &&
							_count_persons <= 29
						) {
							_shared_price = 150;
						}

						if(
							_count_persons >= 30 &&
							_count_persons <= 34
						) {
							_shared_price = 145;
						}

						if(
							_count_persons >= 35
						) {
							_shared_price = 140;
						}

						_transport_price = (_count_persons * _shared_price);

					}

					if(_transport_type == 'touringcar-inclusive') {

						$price_driver = 75;

						if(
							_count_persons >= 0 && 
							_count_persons <= 50
						) {						

							switch(_transport_period) {

								case 2:
									_transport_price = 3658 + (1 * 2 * $price_driver);
								break;
								case 3:
									_transport_price = 4043 + (1 * 3 * $price_driver);
								break;
								case 4:
									_transport_price = 4428 + (1 * 4 * $price_driver);
								break;
								case 5:
									_transport_price = 4813 + (1 * 5 * $price_driver);
								break;
								case 6:
									_transport_price = 5198 + (1 * 6 * $price_driver);
								break;
								case 7:
									_transport_price = 5583 + (1 * 7 * $price_driver);
								break;

							}

						}

						if(
							_count_persons >= 51 && 
							_count_persons <= 54
						) {

							switch(_transport_period) {

								case 2:
									_transport_price = 3768 + (1 * 2 * $price_driver);
								break;
								case 3:
									_transport_price = 4153 + (1 * 3 * $price_driver);
								break;
								case 4:
									_transport_price = 4538 + (1 * 4 * $price_driver);
								break;
								case 5:
									_transport_price = 4923 + (1 * 5 * $price_driver);
								break;
								case 6:
									_transport_price = 5308 + (1 * 6 * $price_driver);
								break;
								case 7:
									_transport_price = 5693 + (1 * 7 * $price_driver);
								break;

							}

						}

						if(
							_count_persons >= 55 && 
							_count_persons <= 60
						) {

							switch(_transport_period) {

								case 2:
									_transport_price = 4235 + (1 * 2 * $price_driver);
								break;
								case 3:
									_transport_price = 4675 + (1 * 3 * $price_driver);
								break;
								case 4:
									_transport_price = 5115 + (1 * 4 * $price_driver);
								break;
								case 5:
									_transport_price = 5555 + (1 * 5 * $price_driver);
								break;
								case 6:
									_transport_price = 5995 + (1 * 6 * $price_driver);
								break;
								case 7:
									_transport_price = 6435 + (1 * 7 * $price_driver);
								break;

							}

						}

						if(
							_count_persons >= 61 && 
							_count_persons <= 87
						) {

							switch(_transport_period) {

								case 2:
									_transport_price = 5170 + (1 * 2 * $price_driver);
								break;
								case 3:
									_transport_price = 5665 + (1 * 3 * $price_driver);
								break;
								case 4:
									_transport_price = 6160 + (1 * 4 * $price_driver);
								break;
								case 5:
									_transport_price = 6655 + (1 * 5 * $price_driver);
								break;
								case 6:
									_transport_price = 7150 + (1 * 6 * $price_driver);
								break;
								case 7:
									_transport_price = 7645 + (1 * 7 * $price_driver);
								break;

							}

						}

						if(
							_count_persons >= 88 && 
							_count_persons <= 100
						) {

							switch(_transport_period) {

								case 2:
									_transport_price = 7316 + (2 * 2 * $price_driver);
								break;
								case 3:
									_transport_price = 8086 + (2 * 3 * $price_driver);
								break;
								case 4:
									_transport_price = 8856 + (2 * 4 * $price_driver);
								break;
								case 5:
									_transport_price = 9626 + (2 * 5 * $price_driver);
								break;
								case 6:
									_transport_price = 10396 + (2 * 6 * $price_driver);
								break;
								case 7:
									_transport_price = 11166 + (2 * 7 * $price_driver);
								break;

							}

						}

						if(
							_count_persons >= 101 && 
							_count_persons <= 104
						) {

							switch(_transport_period) {

								case 2:
									_transport_price = 7426 + (2 * 2 * $price_driver);
								break;
								case 3:
									_transport_price = 8196 + (2 * 3 * $price_driver);
								break;
								case 4:
									_transport_price = 8966 + (2 * 4 * $price_driver);
								break;
								case 5:
									_transport_price = 9736 + (2 * 5 * $price_driver);
								break;
								case 6:
									_transport_price = 10506 + (2 * 6 * $price_driver);
								break;
								case 7:
									_transport_price = 11276 + (2 * 7 * $price_driver);
								break;

							}

						}

						if(
							_count_persons >= 105 && 
							_count_persons <= 110
						) {

							switch(_transport_period) {

								case 2:
									_transport_price = 7536 + (2 * 2 * $price_driver);
								break;
								case 3:
									_transport_price = 8306 + (2 * 3 * $price_driver);
								break;
								case 4:
									_transport_price = 9076 + (2 * 4 * $price_driver);
								break;
								case 5:
									_transport_price = 9846 + (2 * 5 * $price_driver);
								break;
								case 6:
									_transport_price = 10616 + (2 * 6 * $price_driver);
								break;
								case 7:
									_transport_price = 11386 + (2 * 7 * $price_driver);
								break;

							}

						}

						if(
							_count_persons >= 111 && 
							_count_persons <= 120
						) {

							switch(_transport_period) {

								case 2:
									_transport_price = 8470 + (2 * 2 * $price_driver);
								break;
								case 3:
									_transport_price = 9350 + (2 * 3 * $price_driver);
								break;
								case 4:
									_transport_price = 10230 + (2 * 4 * $price_driver);
								break;
								case 5:
									_transport_price = 11110 + (2 * 5 * $price_driver);
								break;
								case 6:
									_transport_price = 11990 + (2 * 6 * $price_driver);
								break;
								case 7:
									_transport_price = 12870 + (2 * 7 * $price_driver);
								break;

							}

						}

						if(
							_count_persons >= 121 && 
							_count_persons <= 137
						) {

							switch(_transport_period) {

								case 2:
									_transport_price = 8828 + (2 * 2 * $price_driver);
								break;
								case 3:
									_transport_price = 9708 + (2 * 3 * $price_driver);
								break;
								case 4:
									_transport_price = 10588 + (2 * 4 * $price_driver);
								break;
								case 5:
									_transport_price = 11468 + (2 * 5 * $price_driver);
								break;
								case 6:
									_transport_price = 12348 + (2 * 6 * $price_driver);
								break;
								case 7:
									_transport_price = 13228 + (2 * 7 * $price_driver);
								break;

							}

						}

						if(
							_count_persons >= 138 && 
							_count_persons <= 147
						) {

							switch(_transport_period) {

								case 2:
									_transport_price = 9405 + (2 * 2 * $price_driver);
								break;
								case 3:
									_transport_price = 10340 + (2 * 3 * $price_driver);
								break;
								case 4:
									_transport_price = 11275 + (2 * 4 * $price_driver);
								break;
								case 5:
									_transport_price = 12210 + (2 * 5 * $price_driver);
								break;
								case 6:
									_transport_price = 13145 + (2 * 6 * $price_driver);
								break;
								case 7:
									_transport_price = 14080 + (2 * 7 * $price_driver);
								break;

							}

						}

						if(
							_count_persons >= 148 && 
							_count_persons <= 174
						) {

							switch(_transport_period) {

								case 2:
									_transport_price = 10340 + (2 * 2 * $price_driver);
								break;
								case 3:
									_transport_price = 11330 + (2 * 3 * $price_driver);
								break;
								case 4:
									_transport_price = 12320 + (2 * 4 * $price_driver);
								break;
								case 5:
									_transport_price = 13310 + (2 * 5 * $price_driver);
								break;
								case 6:
									_transport_price = 14300 + (2 * 6 * $price_driver);
								break;
								case 7:
									_transport_price = 15290 + (2 * 7 * $price_driver);
								break;

							}

						}

						if(
							_count_persons >= 175 && 
							_count_persons <= 234
						) {

							switch(_transport_period) {

								case 2:
									_transport_price = 14575 + (3 * 2 * $price_driver);
								break;
								case 3:
									_transport_price = 16005 + (3 * 3 * $price_driver);
								break;
								case 4:
									_transport_price = 17435 + (3 * 4 * $price_driver);
								break;
								case 5:
									_transport_price = 18865 + (3 * 5 * $price_driver);
								break;
								case 6:
									_transport_price = 20295 + (3 * 6 * $price_driver);
								break;
								case 7:
									_transport_price = 21725 + (3 * 7 * $price_driver);
								break;

							}

						}

					break;

				}

			}

		return _transport_price;

	};
		
}).apply(specific_price_touringcar); 