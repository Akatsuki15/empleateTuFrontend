export const fetchAPI = async (endpoint: string, options = {}) => {
    try{
        const response = await fetch(endpoint, options)

        if(response.status == 401) {
            window.location.href = '/login'
            throw new Error('Sesion expirada. Inicia sesion nuevamente')
        }

        if(!response.ok){
            const errorData = await response.json().catch(() => null)
            throw new Error(errorData?.message || 'Error desconocido')
        }

        const data = await response.json()
        return data
    }catch(error){
        const msg = error instanceof Error ? error.message : 'Error desconocido'
        throw new Error(msg)
    }
}