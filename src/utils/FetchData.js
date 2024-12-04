
// export const options = {
//     method: 'GET',
//     hostname: 'exercisedb.p.rapidapi.com',
//     port: null,
//     path: '/exercises/bodyPartList',
//     headers: {
//         'x-rapidapi-key': 'd36f925923msh391c67212be2f97p18a576jsn8e9f0d208652',
//         'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
//     }
// };

// export const FetchData = async (url, options) => {
//     const response = await fetch(url, options);
//     const data = await response.json();
//     return data;
// }


// exerciseDB vercel app
const API_KEY = 'd36f925923msh391c67212be2f97p18a576jsn8e9f0d208652'; // Replace with your actual API key

export const options = {
    method: 'GET'     
};

export const FetchData = async (url, options) => {
    try {
        const response = await fetch(url, options);
        const jsonData = await response.json();
        return jsonData.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

