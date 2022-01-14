export default class notesapi{

    static getallNote(){ 
        // if there were no notes that will return empty array 
        const notes = JSON.parse(localStorage.getItem("notesapp-notes")|| "[]");
        
        return notes.sort((a,b)=>{
            //sorting algorithm with ternary operation
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNote(noteToSave){ 
          
    }

    static deleteNote(id){ 
           
    }
}