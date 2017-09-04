export class SMSFNavigation
{
    public items: any[];

    constructor()
    {
        this.items = [
            {
                'title': 'APPS',
                'type' : 'subheader'
            },
           {
                'title': 'Dashboard',
                'type' : 'nav-item',
                'icon' : 'email',
                'url'  : '/sample',
                'badge': {
                    'title': 25,
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'title'   : 'Bucket',
                'type'    : 'nav-collapse',
                'icon'    : 'border_all',
                'children': [
                    {
                        'title': 'Pratice Response',
                        'type' : 'nav-item',
                        'url'  : '/bucket/practice_response'
                    },
                    {
                        'title': 'Productivity Bucket',
                        'type' : 'nav-item',
                        'url'  : '/bucket/productivity-bucket'
                    },
                    {
                        'title': 'Practice',
                        'type' : 'nav-item',
                        'url'  : '/bucket/practice'
                    },
                    {
                        'title': 'Jobs',
                        'type' : 'nav-item',
                        'url'  : '/bucket/job'
                    },
                    {
                        'title': 'Task',
                        'type' : 'nav-item',
                        'url'  : '/bucket/task'
                    },
                    {
                        'title': 'Pending Item',
                        'type' : 'nav-item',
                        'url'  : '/bucket/pending-item'
                    },
                    {
                        'title': 'Reports',
                        'type' : 'nav-item',
                        'url'  : '/bucket/reports'
                    }
                ]
            },
            {
                'title'   : 'Practice',
                'type'    : 'nav-collapse',
                'icon'    : 'border_all',
                'children': [
                    {
                        'title': 'Manage Practice',
                        'type' : 'nav-item',
                        'url'  : '/practice/datatables/manage_practice'
                    }
                ]
            },

        ];
    }
}
