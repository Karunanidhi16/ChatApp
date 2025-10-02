export const useAuth = () => {
   
    const token = localStorage.getItem('chatAppToken');
    return !!token; 
};