# azure-oauth2-flow-example

## Setup

1. Run `npm i`
1. Create a `.env` file:
    ```bash
    CLIENT_ID=<appId-from-app-registration>
    CLIENT_SECRET=<clientSecret-from-app-registration>
    ```

## Get information from `API Management`

https://docs.microsoft.com/en-us/rest/api/apimanagement/current-ga/api-operation/get

### Service Principal

To get data from `API Management`, you will have to create a new `App registration` in **Azure Active Directory** and add this `App registration` as a **contributor** on the subscription for which you want to retrieve data

1. Go to **Azure Active Directory** and then **App registrations**
    1. Create a new registration, you only need to give it a name and a client secret.
    1. Take a note of the `Application ID` and the `Client secret value`
1. Go to your subscription
    1. Go to `Access control (IAM)`
    1. Click `Add role assignement`
    1. Choose `Contributor` from the list
    1. On the `Members` tab, select **User, group or service principal**, click `Select members` and choose the `App registration` created in the previous step
    1. Click `Review + assign`

### Get API's

1. Add `API_URL` to your `.env` file:
    ```bash
    API_URL=https://management.azure.com/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.ApiManagement/service/<serviceName>/apis?api-version=2021-08-01
    ```

### Get info for a specific API

1. Add `API_URL` to your `.env` file:
    ```bash
    API_URL=https://management.azure.com/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.ApiManagement/service/<serviceName>/apis/<apiId>?api-version=2021-08-01
    ```

### Get operations for an API

1. Add `API_URL` to your `.env` file:
    ```bash
    API_URL=https://management.azure.com/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.ApiManagement/service/<serviceName>/apis/<apiId>/operations?api-version=2021-08-01
    ```

### Get info for a specific operation for an API

1. Add `API_URL` to your `.env` file:
    ```bash
    API_URL=https://management.azure.com/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.ApiManagement/service/<serviceName>/apis/<apiId>/operations/<operationId>?api-version=2021-08-01
    ```

|Identifier|Description|
|----------|-----------|
|**subscriptionId**|*Found in Overview on your API Management service*
|**resourceGroupName**|*Found in Overview on your API Management service*
|**serviceName**|*The name of your API Management instance*
|**apiId**|*The Name property of the API found in Settings for the API*
|**operationId**|*The name property for an operation. Found in API Management on the operation under the pencil. Or when querying for all operations*
