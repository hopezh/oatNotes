note_list = [
    "name: city",
    " \rlat: 22",
    " \rlon: 120",
    "\r\r",
]

for idx, note in enumerate(note_list):
    print("note ", idx, " attrib 1:", note.strip().split(":")[0])
