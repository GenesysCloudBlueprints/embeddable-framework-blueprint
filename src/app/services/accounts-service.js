import Service from '@ember/service';

export default Service.extend({
    init(){
        this._super(...arguments);

        this.accounts = [
            {
                "Name": "Jollibee",
                "Office": "Philippines",
                "Address": "Jollibee Plaza Building, Emerald Ave., Ortigas Center, Pasig, Metro Manila, Philippines",
                "Phone": "+63 123-456-7890"
            },
            {
                "Name": "McDonald's",
                "Office": "United States",
                "Address": "San Bernardino, California, United States",
                "Phone": "+1 123-456-7890"
            },
            {
                "Name": "Google",
                "Office": "Los Angeles",
                "Address": "340 Main Street Los Angeles, CA 90291",
                "Phone": "+1 310-310-6000"
            },
            {
                "Name": "Facebook",
                "Office": "California",
                "Address": "Facebook Headquarters 1 Hacker Way Menlo Park, CA 94025",
                "Phone": "+1 650-543-4800"
            }
        ];
    }
});
