define(['app'], function(app) {
    app.service('BusinessDayCalcut', [function() {

        this.getBusinessDaysDiff = function(startDate, endDate) {
            var initDay = startDate.weekday();
            var endDay = endDate.weekday();
            var diffCounter = 0;

            for (var day = 1; day <= endDay; day++) {
                if (day !== 6 || day !== 7) {
                    diffCounter++;
                }
            }
            return diffCounter;
        }

    }]);
});
