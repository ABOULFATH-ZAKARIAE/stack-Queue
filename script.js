class stack {
    constructor() {
        this.index = -1;
        this.first = null;
        this.last = null;
    }

    // push in the last of list (Last In)
    push(data) {
        if (!this.last) {
            this.last = this.first = new Node(data);
            this.index++;
            this.first.index = this.last.index = this.index;
            return;
        }
        let oldLast = this.last;
        this.last = new Node(data);
        this.last.prev = oldLast;
        oldLast.next = this.last;
        this.index++;
        this.last.index = this.index;
    }

    // pop a stack
    pop_Stack() {
        if (!this.last) {
            return;
        }
        if (this.first === this.last) {
            this.first = this.last = null;
            return;
        }
        let removedLast = this.last;
        this.last = removedLast.prev;
        this.last.next = null;
        this.index--;
        this.last.index = this.index;
    }

    // pop a queue
    pop_Queue() {
        if (!this.first) {
            return;
        }
        if (this.first === this.last) {
            this.first = this.last = null;
            return;
        }
        let removedFirst = this.first;
        this.first = removedFirst.next;
        this.first.prev = null;
        this.index--;

        this.first.index = 0;
        let currentNode = this.first;
        while (currentNode) {
            currentNode = currentNode.next;
            if (currentNode) currentNode.index -= 1;
        }
    }

    list() {
        if (this.getSize() === 0)
            return;

        let rows = "";
        let currentNode = this.first;
        while (currentNode) {
            rows += "<tr>"
            rows += "<td>" + currentNode.data + "</td>";
            rows += "</tr>";
            currentNode = currentNode.next;
        }
        return rows;
    }

    getSize() {
        return this.index + 1;
    }
    moveNext() {
        if (this.current && this.current.prev)
            this.current = this.current.prev;
    }
    moveBack() {
        if (this.current && this.current.prev)
            this.current = this.current.prev;
    }

}


class Node {
    constructor(data, next, prev, index) {
        this.data = data;
        this.next = next || null;
        this.prev = prev || null;
        this.index = index || null;
    }
}

let list = new stack();

// push stack && queue
function addAsLast() {
    list.push(document.getElementById("data").value);
    showAllAsc();
}

//  pop stack 
function pop_stack(){
    list.pop_Stack(document.getElementById("data").value);
    showAllAsc();
}
// next
function defilerVersHaut(){
    list.moveNext();
    showCurrent();

}
//show current data
function showCurrent() {
    if (this.current)
        return this.current.data;
    else
        return "No Data Yet";
}

// back
function defilerVersBas(){
    alert("1");
    list.moveBack();
    alert("2");
    //showCurrent();
    document.getElementById("data").innerHTML = " <tr><<th>Data</th></tr>";
    alert("3");
    document.getElementById("data").innerHTML += list.showCurrent();
}


// pop queue 
function pop_queue(){
    list.pop_Queue(document.getElementById("data").value);
    showAllAsc();
}


//  show results
function showAllAsc() {
    document.getElementById("table").innerHTML = " <tr><th>Data</th></tr>";
    document.getElementById("table").innerHTML += list.list();
}
function showAllAsc1() {
    document.getElementById("data").innerHTML = " <tr><th>Data</th></tr>";
    document.getElementById("data").innerHTML += list.list();
}