define(['app'], function(app) {
    app.service('BusinessDayCalcut', [function() {

        this.getBusinessDays = function(startDate, endDate) {
            var a, b, c;
            var iDiff = 0;
            var unit = 'day';
            var iDiffDays = endDate.diff(startDate, unit);

            if (endDate.isSame(startDate)) return iDiff;

            if (endDate.isBefore(start)) {
                a = start.clone();
                b = endDate.clone();
                c = -1;
            } else {
                a = endDate.clone();
                b = startDate.clone();
                c = 1;
            }

            do {
                var iDay = b.day();
                if (iDay > 0 && iDay < 6) {
                    iDiff++;
                }
                b.add(unit, 1);
            } while (a.diff(b, unit) > 0);

            return iDiff * c;
        }

    }]);
});
