# Element2JSON

**Hover to highlight any element on the page, click it, and download a text-only JSON file of that element and its children.**
(Scripts, attributes, and embedded JSON-only text nodes are excluded.)

---

## Installation

1. Copy the Minified Bookmarklet code below:

   ```text
   javascript:(function(){function J(s){if(typeof s!=='string')return!1;const t=s.trim();if(!(t.startsWith('{')||t.startsWith('[')))return!1;try{JSON.parse(t);return!0}catch{return!1}}function H(n){const o={tag:n.tagName,children:[]};for(const c of n.childNodes){if(c.nodeType===3){const x=c.textContent.trim();x&&!J(x)&&o.children.push(x);}else if(c.nodeType===1&&c.tagName!=='SCRIPT'){o.children.push(H(c));}}return o;}let p=null;function M(e){if(p)p.style.outline='';if(e.target.nodeType===1){e.target.style.outline='2px solid #f00';p=e.target;}}function O(){if(p){p.style.outline='';p=null;}}function C(e){e.preventDefault();e.stopPropagation();document.removeEventListener('mouseover',M,true);document.removeEventListener('mouseout',O,true);document.removeEventListener('click',C,true);if(p)p.style.outline='';const T=JSON.stringify(H(e.target),null,2);console.log(T);const B=new Blob([T],{type:'application/json'}),U=URL.createObjectURL(B),A=document.createElement('a');A.href=U;A.download='selection.json';document.body.appendChild(A);A.click();document.body.removeChild(A);URL.revokeObjectURL(U);alert('✅ Selected element JSON downloaded as “selection.json”');}document.addEventListener('mouseover',M,true);document.addEventListener('mouseout',O,true);document.addEventListener('click',C,true);alert('🔍 Hover over an element to highlight, then click it to download its JSON.');console.log("34c1b263a91dbcba99881bea53d584d7337da4d4af4a678520577e774ecb6bdf")})();
   ```

2. In your browser, create a new bookmark (or favorite).

3. Set the **Name** to something descriptive, e.g. `Element2JSON`.

4. Paste the entire code (including the leading `javascript:`) into the **URL** (or **Location**) field.

5. Save the bookmark.

---

## Usage

1. Navigate to any web page.
2. Click your **Element2JSON** bookmark.
3. An alert will prompt you: **"Hover over an element to highlight, then click it to download its JSON."**
4. Move your mouse over the page; the currently hovered element is outlined in red.
5. Click the element you want to extract.
6. A file named `selection.json` containing the selected element and its text-only children will be downloaded.

---

## Customization

* To change the downloaded filename, edit the `A.download = 'selection.json';` line in the bookmarklet code.
* To adjust the highlight style, modify the `outline` CSS in `M(e)` (e.g. color or thickness).

---
