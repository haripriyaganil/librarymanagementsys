const booksData = {
  Fantasy: [
    { title:"Harry Potter", author:"J K Rowling", cover:"/images/covers/default-book.jpg" },
    { title:"The Hobbit", author:"J.R.R. Tolkien", cover:"/images/covers/default-book.jpg" },
    { title:"Lord of the Rings", author:"J.R.R. Tolkien", cover:"/images/covers/default-book.jpg" },
    { title:"Percy Jackson", author:"Rick Riordan", cover:"/images/covers/default-book.jpg" },
    { title:"Narnia", author:"C.S. Lewis", cover:"/images/covers/default-book.jpg" },
    { title:"Eragon", author:"Christopher Paolini", cover:"/images/covers/default-book.jpg" },
    { title:"Mistborn", author:"Brandon Sanderson", cover:"/images/covers/default-book.jpg" },
    { title:"Stormlight Archive", author:"Brandon Sanderson", cover:"/images/covers/default-book.jpg" },
    { title:"The Witcher", author:"Andrzej Sapkowski", cover:"/images/covers/default-book.jpg" },
    { title:"Good Omens", author:"Neil Gaiman", cover:"/images/covers/default-book.jpg" }
  ],

  Fiction: [
    { title:"The Alchemist", author:"Paulo Coelho", cover:"/images/covers/default-book.jpg" },
    { title:"1984", author:"George Orwell", cover:"/images/covers/default-book.jpg" },
    { title:"The Kite Runner", author:"Khaled Hosseini", cover:"/images/covers/default-book.jpg" },
    { title:"Life of Pi", author:"Yann Martel", cover:"/images/covers/default-book.jpg" },
    { title:"The Book Thief", author:"Markus Zusak", cover:"/images/covers/default-book.jpg" },
    { title:"To Kill a Mockingbird", author:"Harper Lee", cover:"/images/covers/default-book.jpg" },
    { title:"The Great Gatsby", author:"F. Scott Fitzgerald", cover:"/images/covers/default-book.jpg" },
    { title:"Gone Girl", author:"Gillian Flynn", cover:"/images/covers/default-book.jpg" },
    { title:"The Night Circus", author:"Erin Morgenstern", cover:"/images/covers/default-book.jpg" },
    { title:"Shutter Island", author:"Dennis Lehane", cover:"/images/covers/default-book.jpg" }
  ],

  Literature: [
    { title:"Hamlet", author:"William Shakespeare", cover:"/images/covers/default-book.jpg" },
    { title:"Macbeth", author:"William Shakespeare", cover:"/images/covers/default-book.jpg" },
    { title:"Othello", author:"William Shakespeare", cover:"/images/covers/default-book.jpg" },
    { title:"King Lear", author:"William Shakespeare", cover:"/images/covers/default-book.jpg" },
    { title:"Pride and Prejudice", author:"Jane Austen", cover:"/images/covers/default-book.jpg" },
    { title:"Jane Eyre", author:"Charlotte Brontë", cover:"/images/covers/default-book.jpg" },
    { title:"Wuthering Heights", author:"Emily Brontë", cover:"/images/covers/default-book.jpg" },
    { title:"Great Expectations", author:"Charles Dickens", cover:"/images/covers/default-book.jpg" },
    { title:"Oliver Twist", author:"Charles Dickens", cover:"/images/covers/default-book.jpg" },
    { title:"The Odyssey", author:"Homer", cover:"/images/covers/default-book.jpg" }
  ],

  Business: [
    { title:"Zero to One", author:"Peter Thiel", cover:"/images/covers/default-book.jpg" },
    { title:"The Lean Startup", author:"Eric Ries", cover:"/images/covers/default-book.jpg" },
    { title:"Start With Why", author:"Simon Sinek", cover:"/images/covers/default-book.jpg" },
    { title:"Good to Great", author:"Jim Collins", cover:"/images/covers/default-book.jpg" },
    { title:"Blue Ocean Strategy", author:"Kim & Mauborgne", cover:"/images/covers/default-book.jpg" },
    { title:"The $100 Startup", author:"Chris Guillebeau", cover:"/images/covers/default-book.jpg" },
    { title:"Rework", author:"Jason Fried", cover:"/images/covers/default-book.jpg" },
    { title:"The Hard Thing About Hard Things", author:"Ben Horowitz", cover:"/images/covers/default-book.jpg" },
    { title:"Think and Grow Rich", author:"Napoleon Hill", cover:"/images/covers/default-book.jpg" },
    { title:"Principles", author:"Ray Dalio", cover:"/images/covers/default-book.jpg" }
  ],

  Technology: [
    { title:"Clean Code", author:"Robert C. Martin", cover:"/images/covers/default-book.jpg" },
    { title:"Design Patterns", author:"GoF", cover:"/images/covers/default-book.jpg" },
    { title:"Refactoring", author:"Martin Fowler", cover:"/images/covers/default-book.jpg" },
    { title:"You Don't Know JS", author:"Kyle Simpson", cover:"/images/covers/default-book.jpg" },
    { title:"The Pragmatic Programmer", author:"Andrew Hunt", cover:"/images/covers/default-book.jpg" },
    { title:"Introduction to Algorithms", author:"Cormen", cover:"/images/covers/default-book.jpg" },
    { title:"Code Complete", author:"Steve McConnell", cover:"/images/covers/default-book.jpg" },
    { title:"Cracking the Coding Interview", author:"Gayle McDowell", cover:"/images/covers/default-book.jpg" },
    { title:"Structure and Interpretation", author:"SICP", cover:"/images/covers/default-book.jpg" },
    { title:"Operating System Concepts", author:"Silberschatz", cover:"/images/covers/default-book.jpg" }
  ],

  SelfHelp: [
    { title:"Atomic Habits", author:"James Clear", cover:"/images/covers/default-book.jpg" },
    { title:"7 Habits of Highly Effective People", author:"Stephen Covey", cover:"/images/covers/default-book.jpg" },
    { title:"Think Like a Monk", author:"Jay Shetty", cover:"/images/covers/default-book.jpg" },
    { title:"Deep Work", author:"Cal Newport", cover:"/images/covers/default-book.jpg" },
    { title:"The Subtle Art of Not Giving a F*ck", author:"Mark Manson", cover:"/images/covers/default-book.jpg" },
    { title:"How to Win Friends", author:"Dale Carnegie", cover:"/images/covers/default-book.jpg" },
    { title:"Ikigai", author:"Hector Garcia", cover:"/images/covers/default-book.jpg" },
    { title:"Mindset", author:"Carol Dweck", cover:"/images/covers/default-book.jpg" },
    { title:"The Power of Now", author:"Eckhart Tolle", cover:"/images/covers/default-book.jpg" },
    { title:"Can't Hurt Me", author:"David Goggins", cover:"/images/covers/default-book.jpg" }
  ],

  History: [
    { title:"Sapiens", author:"Yuval Noah Harari", cover:"/images/covers/default-book.jpg" },
    { title:"Guns, Germs, and Steel", author:"Jared Diamond", cover:"/images/covers/default-book.jpg" },
    { title:"India After Gandhi", author:"Ramachandra Guha", cover:"/images/covers/default-book.jpg" },
    { title:"The Silk Roads", author:"Peter Frankopan", cover:"/images/covers/default-book.jpg" },
    { title:"SPQR", author:"Mary Beard", cover:"/images/covers/default-book.jpg" },
    { title:"Team of Rivals", author:"Doris Kearns Goodwin", cover:"/images/covers/default-book.jpg" },
    { title:"The Cold War", author:"John Gaddis", cover:"/images/covers/default-book.jpg" },
    { title:"The Crusades", author:"Thomas Asbridge", cover:"/images/covers/default-book.jpg" },
    { title:"Postwar", author:"Tony Judt", cover:"/images/covers/default-book.jpg" },
    { title:"The Wright Brothers", author:"David McCullough", cover:"/images/covers/default-book.jpg" }
  ],

  Biography: [
    { title:"Wings of Fire", author:"A.P.J. Abdul Kalam", cover:"/images/covers/default-book.jpg" },
    { title:"Steve Jobs", author:"Walter Isaacson", cover:"/images/covers/default-book.jpg" },
    { title:"Becoming", author:"Michelle Obama", cover:"/images/covers/default-book.jpg" },
    { title:"Long Walk to Freedom", author:"Nelson Mandela", cover:"/images/covers/default-book.jpg" },
    { title:"The Diary of a Young Girl", author:"Anne Frank", cover:"/images/covers/default-book.jpg" },
    { title:"Einstein", author:"Walter Isaacson", cover:"/images/covers/default-book.jpg" },
    { title:"Elon Musk", author:"Ashlee Vance", cover:"/images/covers/default-book.jpg" },
    { title:"Alexander Hamilton", author:"Ron Chernow", cover:"/images/covers/default-book.jpg" },
    { title:"Benjamin Franklin", author:"Walter Isaacson", cover:"/images/covers/default-book.jpg" },
    { title:"The Story of My Life", author:"Helen Keller", cover:"/images/covers/default-book.jpg" }
  ],

  Philosophy: [
    { title:"Meditations", author:"Marcus Aurelius", cover:"/images/covers/default-book.jpg" },
    { title:"The Republic", author:"Plato", cover:"/images/covers/default-book.jpg" },
    { title:"The Art of War", author:"Sun Tzu", cover:"/images/covers/default-book.jpg" },
    { title:"Thus Spoke Zarathustra", author:"Nietzsche", cover:"/images/covers/default-book.jpg" },
    { title:"Beyond Good and Evil", author:"Nietzsche", cover:"/images/covers/default-book.jpg" },
    { title:"The Prince", author:"Machiavelli", cover:"/images/covers/default-book.jpg" },
    { title:"Sophie's World", author:"Jostein Gaarder", cover:"/images/covers/default-book.jpg" },
    { title:"Being and Nothingness", author:"Jean-Paul Sartre", cover:"/images/covers/default-book.jpg" },
    { title:"Critique of Pure Reason", author:"Immanuel Kant", cover:"/images/covers/default-book.jpg" },
    { title:"Discourses", author:"Epictetus", cover:"/images/covers/default-book.jpg" }
  ],

  Psychology: [
    { title:"Thinking, Fast and Slow", author:"Daniel Kahneman", cover:"/images/covers/default-book.jpg" },
    { title:"Man's Search for Meaning", author:"Viktor Frankl", cover:"/images/covers/default-book.jpg" },
    { title:"Emotional Intelligence", author:"Daniel Goleman", cover:"/images/covers/default-book.jpg" },
    { title:"Influence", author:"Robert Cialdini", cover:"/images/covers/default-book.jpg" },
    { title:"Flow", author:"Mihaly Csikszentmihalyi", cover:"/images/covers/default-book.jpg" },
    { title:"Predictably Irrational", author:"Dan Ariely", cover:"/images/covers/default-book.jpg" },
    { title:"The Power of Habit", author:"Charles Duhigg", cover:"/images/covers/default-book.jpg" },
    { title:"Games People Play", author:"Eric Berne", cover:"/images/covers/default-book.jpg" },
    { title:"Quiet", author:"Susan Cain", cover:"/images/covers/default-book.jpg" },
    { title:"Drive", author:"Daniel Pink", cover:"/images/covers/default-book.jpg" }
  ],

  Science: [
    { title:"A Brief History of Time", author:"Stephen Hawking", cover:"/images/covers/default-book.jpg" },
    { title:"Cosmos", author:"Carl Sagan", cover:"/images/covers/default-book.jpg" },
    { title:"The Selfish Gene", author:"Richard Dawkins", cover:"/images/covers/default-book.jpg" },
    { title:"The Elegant Universe", author:"Brian Greene", cover:"/images/covers/default-book.jpg" },
    { title:"Astrophysics for People in a Hurry", author:"Neil deGrasse Tyson", cover:"/images/covers/default-book.jpg" },
    { title:"The Gene", author:"Siddhartha Mukherjee", cover:"/images/covers/default-book.jpg" },
    { title:"Silent Spring", author:"Rachel Carson", cover:"/images/covers/default-book.jpg" },
    { title:"A Short History of Nearly Everything", author:"Bill Bryson", cover:"/images/covers/default-book.jpg" },
    { title:"The Immortal Life of Henrietta Lacks", author:"Rebecca Skloot", cover:"/images/covers/default-book.jpg" },
    { title:"Surely You're Joking, Mr. Feynman!", author:"Richard Feynman", cover:"/images/covers/default-book.jpg" }
  ],

  Romance: [
    { title:"Me Before You", author:"Jojo Moyes", cover:"/images/covers/default-book.jpg" },
    { title:"It Ends With Us", author:"Colleen Hoover", cover:"/images/covers/default-book.jpg" },
    { title:"The Notebook", author:"Nicholas Sparks", cover:"/images/covers/default-book.jpg" },
    { title:"Pride and Prejudice", author:"Jane Austen", cover:"/images/covers/default-book.jpg" },
    { title:"Love & Other Words", author:"Christina Lauren", cover:"/images/covers/default-book.jpg" },
    { title:"The Time Traveler's Wife", author:"Audrey Niffenegger", cover:"/images/covers/default-book.jpg" },
    { title:"Call Me By Your Name", author:"Andre Aciman", cover:"/images/covers/default-book.jpg" },
    { title:"Outlander", author:"Diana Gabaldon", cover:"/images/covers/default-book.jpg" },
    { title:"The Fault in Our Stars", author:"John Green", cover:"/images/covers/default-book.jpg" },
    { title:"Twilight", author:"Stephenie Meyer", cover:"/images/covers/default-book.jpg" }
  ],

  Mystery: [
    { title:"The Girl with the Dragon Tattoo", author:"Stieg Larsson", cover:"/images/covers/default-book.jpg" },
    { title:"Gone Girl", author:"Gillian Flynn", cover:"/images/covers/default-book.jpg" },
    { title:"The Da Vinci Code", author:"Dan Brown", cover:"/images/covers/default-book.jpg" },
    { title:"Big Little Lies", author:"Liane Moriarty", cover:"/images/covers/default-book.jpg" },
    { title:"Sherlock Holmes", author:"Arthur Conan Doyle", cover:"/images/covers/default-book.jpg" },
    { title:"The Silent Patient", author:"Alex Michaelides", cover:"/images/covers/default-book.jpg" },
    { title:"In the Woods", author:"Tana French", cover:"/images/covers/default-book.jpg" },
    { title:"The Woman in White", author:"Wilkie Collins", cover:"/images/covers/default-book.jpg" },
    { title:"The Hound of the Baskervilles", author:"Arthur Conan Doyle", cover:"/images/covers/default-book.jpg" },
    { title:"The Reversal", author:"Michael Connelly", cover:"/images/covers/default-book.jpg" }
  ],

  Horror: [
    { title:"It", author:"Stephen King", cover:"/images/covers/default-book.jpg" },
    { title:"The Shining", author:"Stephen King", cover:"/images/covers/default-book.jpg" },
    { title:"Dracula", author:"Bram Stoker", cover:"/images/covers/default-book.jpg" },
    { title:"Frankenstein", author:"Mary Shelley", cover:"/images/covers/default-book.jpg" },
    { title:"The Exorcist", author:"William Peter Blatty", cover:"/images/covers/default-book.jpg" },
    { title:"Pet Sematary", author:"Stephen King", cover:"/images/covers/default-book.jpg" },
    { title:"The Haunting of Hill House", author:"Shirley Jackson", cover:"/images/covers/default-book.jpg" },
    { title:"Bird Box", author:"Josh Malerman", cover:"/images/covers/default-book.jpg" },
    { title:"World War Z", author:"Max Brooks", cover:"/images/covers/default-book.jpg" },
    { title:"House of Leaves", author:"Mark Z. Danielewski", cover:"/images/covers/default-book.jpg" }
  ],

  Motivation: [
    { title:"Atomic Habits", author:"James Clear", cover:"/images/covers/default-book.jpg" },
    { title:"The Power of Now", author:"Eckhart Tolle", cover:"/images/covers/default-book.jpg" },
    { title:"Think and Grow Rich", author:"Napoleon Hill", cover:"/images/covers/default-book.jpg" },
    { title:"Can't Hurt Me", author:"David Goggins", cover:"/images/covers/default-book.jpg" },
    { title:"You Can Win", author:"Shiv Khera", cover:"/images/covers/default-book.jpg" },
    { title:"The Magic of Thinking Big", author:"David Schwartz", cover:"/images/covers/default-book.jpg" },
    { title:"Awaken the Giant Within", author:"Tony Robbins", cover:"/images/covers/default-book.jpg" },
    { title:"The Alchemist", author:"Paulo Coelho", cover:"/images/covers/default-book.jpg" },
    { title:"Do It Today", author:"Darius Foroux", cover:"/images/covers/default-book.jpg" },
    { title:"Make Your Bed", author:"William McRaven", cover:"/images/covers/default-book.jpg" }
  ],

  Finance: [
    { title:"Rich Dad Poor Dad", author:"Robert Kiyosaki", cover:"/images/covers/default-book.jpg" },
    { title:"The Psychology of Money", author:"Morgan Housel", cover:"/images/covers/default-book.jpg" },
    { title:"The Intelligent Investor", author:"Benjamin Graham", cover:"/images/covers/default-book.jpg" },
    { title:"I Will Teach You to Be Rich", author:"Ramit Sethi", cover:"/images/covers/default-book.jpg" },
    { title:"The Richest Man in Babylon", author:"George S. Clason", cover:"/images/covers/default-book.jpg" },
    { title:"Common Stocks and Uncommon Profits", author:"Philip Fisher", cover:"/images/covers/default-book.jpg" },
    { title:"Security Analysis", author:"Benjamin Graham", cover:"/images/covers/default-book.jpg" },
    { title:"Money Master the Game", author:"Tony Robbins", cover:"/images/covers/default-book.jpg" },
    { title:"The Millionaire Next Door", author:"Thomas Stanley", cover:"/images/covers/default-book.jpg" },
    { title:"Unshakeable", author:"Tony Robbins", cover:"/images/covers/default-book.jpg" }
  ]
};

export default booksData;