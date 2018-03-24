function dias(mes, anno) {
      if (mes.charAt(0) == '0')
	     mes = mes.charAt(1);
      mes = parseInt(mes);
	  anno = parseInt(anno);
      switch (mes) {
	    case 1 : case 3 : case 5 : case 7 : case 8 : case 10 : case 12 : return 31;
		case 2 : return (anno % 4 == 0) ? 29 : 28;
	  }
	  return 30;
   }