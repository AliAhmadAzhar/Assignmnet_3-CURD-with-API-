
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    "Authorization": "vigfuyfoufooyf"
  },
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle errors here
    throw error;
  }
);

export default apiClient;
In the code above:

- We import Axios and create an Axios instance with a base URL.
- We set the Content-Type header to JSON, but you can modify it as needed.
- We use an Axios interceptor to handle successful responses. It extracts the data from the response.
- We also handle errors globally using the interceptor.

3. Create CRUD Functions

Now, you can create functions for CRUD operations using the Axios instance you created:
javascript
import apiClient from './apiClient';

// Create a new resource
async function createResource(data) {
  try {
    const response = await apiClient.post('/resource', data);
    return response;
  } catch (error) {
    throw error;
  }
}

// Read a resource
async function getResource(id) {
  try {
    const response = await apiClient.get(`/resource/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
}

// Update a resource
async function updateResource(id, data) {
  try {
    const response = await apiClient.put(`/resource/${id}`, data);
    return response;
  } catch (error) {
    throw error;
  }
}

// Delete a resource
async function deleteResource(id) {
  try {
    const response = await apiClient.delete(`/resource/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
}

export { createResource, getResource, updateResource, deleteResource };
In the code above, we've created four functions for CRUD operations using Axios. Each function makes an HTTP request to the corresponding endpoint and handles errors using try-catch blocks.

### 4. Usage

You can now use these functions in your application:
javascript
import {
  createResource,
  getResource,
  updateResource,
  deleteResource,
} from './crudFunctions';

// Example usage:
async function exampleUsage() {
  try {
    // Create a new resource
    const createdResource = await createResource({ name: 'New Resource' });

    // Read a resource
    const resourceId = createdResource.id;
    const retrievedResource = await getResource(resourceId);

    // Update a resource
    const updatedResource = await updateResource(resourceId, {
      name: 'Updated Resource',
    });

    // Delete a resource
    await deleteResource(resourceId);
  } catch (error) {
    console.error('Error:', error);
  }
}

exampleUsage();
This example demonstrates how to use the CRUD functions to interact with your API.

