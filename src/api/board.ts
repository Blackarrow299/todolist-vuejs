

type BoardResp = { success: true } | {
    success: false
    error: string
} 

export const createBoard = async (name: string): Promise<BoardResp> => {
    try {
        //check if board exist
        const board = localStorage.getItem(name)
        if (board) return { success: false, error: `board with name ${name} already exists.` }

        const boards = await getAllBoards()
        boards.push(name)

        localStorage.setItem("boards", JSON.stringify(boards))
        localStorage.setItem(name, JSON.stringify([]))

        return { success: true }
        
    } catch {
        return { success: false , error: "something went wrong."}
    }
}

export const getAllBoards = async () => {
    const boards = localStorage.getItem("boards")
    if (!boards) return [] as string[] 
    return JSON.parse(boards) as string[]
}



export const deleteBoard = async (name: string): Promise<BoardResp> => {
    try {
        const board = localStorage.getItem(name)
        if (!board) return { success: false, error: `board with name ${name} does not exist.` }
        localStorage.removeItem(name)

        const boardsJson = localStorage.getItem("boards") as string
        const boards = await JSON.parse(boardsJson) as string[]

        const newBoards = boards.filter((boardName) => {
            return name != boardName
        })

        localStorage.setItem("boards", JSON.stringify(newBoards))

        return {success: true}
    } catch {
        return {success: false, error: "something went wrong"}
    }
}