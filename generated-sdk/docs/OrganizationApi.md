# OrganizationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**organizationControllerCreate**](#organizationcontrollercreate) | **POST** /organization | |
|[**organizationControllerFindAll**](#organizationcontrollerfindall) | **GET** /organization | |
|[**organizationControllerFindOne**](#organizationcontrollerfindone) | **GET** /organization/{id} | |
|[**organizationControllerRemove**](#organizationcontrollerremove) | **DELETE** /organization/{id} | |
|[**organizationControllerUpdate**](#organizationcontrollerupdate) | **PATCH** /organization/{id} | |

# **organizationControllerCreate**
> organizationControllerCreate(createOrganizationDto)


### Example

```typescript
import {
    OrganizationApi,
    Configuration,
    CreateOrganizationDto
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationApi(configuration);

let createOrganizationDto: CreateOrganizationDto; //

const { status, data } = await apiInstance.organizationControllerCreate(
    createOrganizationDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOrganizationDto** | **CreateOrganizationDto**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organizationControllerFindAll**
> organizationControllerFindAll()


### Example

```typescript
import {
    OrganizationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationApi(configuration);

const { status, data } = await apiInstance.organizationControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organizationControllerFindOne**
> organizationControllerFindOne()


### Example

```typescript
import {
    OrganizationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.organizationControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organizationControllerRemove**
> organizationControllerRemove()


### Example

```typescript
import {
    OrganizationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.organizationControllerRemove(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organizationControllerUpdate**
> organizationControllerUpdate(updateOrganizationDto)


### Example

```typescript
import {
    OrganizationApi,
    Configuration,
    UpdateOrganizationDto
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationApi(configuration);

let id: string; // (default to undefined)
let updateOrganizationDto: UpdateOrganizationDto; //

const { status, data } = await apiInstance.organizationControllerUpdate(
    id,
    updateOrganizationDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrganizationDto** | **UpdateOrganizationDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

