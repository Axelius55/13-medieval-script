import * as sdk from './generated-sdk';

const organizationApi = new sdk.OrganizationApi(new sdk.Configuration({
    basePath: 'http://localhost:3000',
    baseOptions: {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlZjI4ZTA0LTM0NjUtNDg2NC05YTdmLTJlYWE5ZjE1ZTRmNCIsImVtYWlsIjoiam9obi5kb2VAbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3NzM5NjIyNTUsImV4cCI6MTc3Mzk2NTg1NX0.79K5QC_Jww8VMszpKHKBaJF_sCUWGWNd6x4Ynv2apDA'
        }
    }
    }));

organizationApi.organizationControllerCreate({ name: 'Test organization from SDK' }).then((response) => {
    console.log(response.data);
});

