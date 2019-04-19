	/*Изменение размера текста*/
	function changeSizeText(){

		var optionSize = $('select[name=fontSizeText]').val();

		var size16 = '16px';
		var size18 = '18px';
		var size20 = '20px';
		var size22 = '22px';
		var size24 = '24px';

		//$.cookie('name', 'value');

		switch(optionSize){
			case '16':
				// setItem('key','value')
				localStorage.setItem('fontSize_key','16px');
				// Изменяем размер текста
				$('.ui-content *').css('font-size', size16);
			break;
			case '18':
				localStorage.setItem('fontSize_key','18px');
				$('.ui-content *').css('font-size', size18);
			break;
			case '20':
				localStorage.setItem('fontSize_key','20px');
				$('.ui-content *').css('font-size', size20);
			break;
			case '22':
				localStorage.setItem('fontSize_key','22px');
				$('.ui-content *').css('font-size', size22);
			break;
			case '24':
				localStorage.setItem('fontSize_key','24px');
				$('.ui-content *').css('font-size', size24);
			break;
		}

	};

	/*Изменение фонового цвета*/
	function changeBackground(){

		var optionBackground = $('select[name=backgroundColor]').val();

		var white_bgc = '#ffffff';
		var gray_bgc = '#ecf0f1';
		var black_bgc = '#2f3640';

		//$.cookie('name', 'value');

		switch(optionBackground){
			case 'white_background':
				localStorage.setItem('backgroundColor_key','#ffffff');
				$('.ui-page-theme-a, .ui-panel-wrapper *').css('background-color', white_bgc);
			break;
			case 'gray_background':
				localStorage.setItem('backgroundColor_key','#ecf0f1');
				$('.ui-page-theme-a, .ui-panel-wrapper *').css('background-color', gray_bgc);
			break;
			case 'black_background':
				localStorage.setItem('backgroundColor_key','#2f3640');
				$('.ui-page-theme-a, .ui-panel-wrapper *').css('background-color', black_bgc);
			break;
		}

	};

	/*Изменение цвета текста*/
	function changeColorText(){

		var optionColorText = $('select[name=textColor]').val();

		var white_colorText = '#ffffff';
		var gray_colorText = '#cccccc';
		var black_colorText = '#333333';

		//$.cookie('name', 'value');

		switch(optionColorText){
			case 'white_colorText':
				localStorage.setItem('colorSize_key','#ffffff');
				$('.ui-content *').css('color', white_colorText);
			break;
			case 'gray_colorText':
				localStorage.setItem('colorSize_key','#cccccc');
				$('.ui-content *').css('color', gray_colorText);
			break;
			case 'black_colorText':
				localStorage.setItem('colorSize_key','#333333');
				$('.ui-content *').css('color', black_colorText);
			break;
		}

	};

	//Работа с localStorage
	window.onload = function(){

		// Размер текста
		// Проверяем пуста ли переменная fontSize_key в localStorage, а затем выполняем нужные действия
		if(localStorage.getItem('fontSize_key') !== null){
			var sizeText = localStorage.getItem('fontSize_key');
			$('.ui-content *').css('font-size', sizeText);
		}

		// Фоновый цвет
		if(localStorage.getItem('backgroundColor_key') !== null){
			var backgroundPage = localStorage.getItem('backgroundColor_key');
			$('.ui-page-theme-a, .ui-panel-wrapper *').css('background-color', backgroundPage);
		}

		// Цвет текста
		if(localStorage.getItem('colorSize_key') !== null){
			var colorText = localStorage.getItem('colorSize_key');
			$('.ui-content *').css('color', colorText);
		}

	}

	//Сброс настроек
	function resetSettings() {

		// Удаляем нужные ключи из localStorage (удалить все ключи - localStorage.clear();)
		localStorage.removeItem('fontSize_key');
		localStorage.removeItem('backgroundColor_key');
		localStorage.removeItem('colorSize_key');

		// Перезагружаем страницу
		location.reload();
	}