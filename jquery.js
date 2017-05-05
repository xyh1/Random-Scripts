$.each(Highcharts.charts[0].series,function(i,serie){

            $.each(serie.data,function(j,point){
                console.log((new Date(point.x).toUTCString()), '$'+point.y);
            });

        });
