import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './QuickView.css';

const QuickView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Book details data
  const books = {
    1: {
      title: "Iron Flame",
      author: "Rebecca Yarros",
      cover: "https://storage.googleapis.com/du-prd/books/images/9781649374172.jpg",
      genre: "Fantasy",
      description: "In this thrilling sequel to Fourth Wing, the war between dragons and their riders intensifies as dark forces threaten the realm. Following the death of War Commander Ambrose, Violet Sorrengail must navigate treacherous political alliances and face devastating personal losses. As the youngest dragon rider in history, she carries the weight of protecting not only her dragon but also the future of their world. With her connection to Commander Thorn growing stronger and more complex, Violet must decide whom to trust in a world where loyalty comes at a deadly price. The book delves deep into themes of sacrifice, power, and the true cost of war, while expanding the rich mythology of the dragon riders and their ancient traditions. Readers will be captivated by the intricate world-building, heart-pounding action sequences, and the emotional depth of characters facing impossible choices.",
      publishDate: "November 7, 2023",
      pages: 640,
      rating: 4.8,
      reviews: 1250,
      series: "The Empyrean Series, Book 2"
    },
    2: {
      title: "The Heaven & Earth Grocery Store",
      author: "James McBride",
      cover: "https://storage.googleapis.com/du-prd/books/images/9780593422946.jpg",
      genre: "Historical Fiction",
      description: "Set in the small town of Pottstown, Pennsylvania, this masterful novel weaves together the lives of a diverse cast of characters across different decades. The story begins in 1972 with the discovery of thousands of bones beneath an old grocery store, leading readers through a compelling narrative that spans from the 1920s to the 1960s. At its heart is the Heaven & Earth Grocery Store, a unique establishment that served as a meeting point for the town's Black and Jewish communities. Through the lives of Dr. Nate Timberlake, a Black psychiatrist, Moshe Fisher, a Jewish circus performer, and Mrs. Essie Spoon, the store's proprietor, McBride explores themes of friendship, prejudice, and the power of community in the face of discrimination. The novel masterfully depicts the intersection of different marginalized communities and their shared struggles, while celebrating the resilience of the human spirit and the unexpected bonds that form in times of adversity.",
      publishDate: "August 8, 2023",
      pages: 400,
      rating: 4.6,
      reviews: 850,
      awards: "National Book Award Finalist"
    },
    3: {
      title: "House of Flame and Shadow",
      author: "Sarah J. Maas",
      cover: "https://storage.googleapis.com/du-prd/books/images/9781635574104.jpg",
      genre: "Fantasy",
      description: "The highly anticipated third installment in the Crescent City series plunges readers into a world of ancient magic, forbidden love, and earth-shattering consequences. Bryce Quinlan finds herself trapped in a realm she never expected to see, separated from everything and everyone she holds dear in Midgard. As she desperately searches for a way home, she uncovers shocking truths about the Asteri's rule and the true nature of her own powers. Meanwhile, Hunt Athalar faces his own battles in Midgard, fighting to protect what remains of their world while searching for a way to bring Bryce back. The novel expertly weaves together multiple storylines, introducing new mythological elements while deepening the existing lore of the Crescent City universe. Maas crafts an intricate tale of love, sacrifice, and destiny, while exploring themes of power, identity, and the true meaning of home. With breathtaking world-building and emotional depth, this book delivers heart-wrenching twists and epic revelations that will leave readers spellbound.",
      publishDate: "January 30, 2024",
      pages: 816,
      rating: 4.9,
      reviews: 950,
      series: "Crescent City Series, Book 3"
    },
    4: {
      title: "Fourth Wing",
      author: "Rebecca Yarros",
      cover: "https://storage.googleapis.com/du-prd/books/images/9781649374042.jpg",
      genre: "Fantasy",
      description: "Enter a world where dragons rule the skies and becoming a rider means risking everything. Twenty-year-old Violet Sorrengail was destined for a quiet life as a scribe until her mother, the commanding general, forces her to join the brutal dragon rider training program. Despite her physical limitations and the constant threat of death, Violet must navigate the cutthroat competition where failure means death and success means becoming one of the elite dragon riders. The story masterfully combines elements of military fantasy, romance, and coming-of-age as Violet faces not only the physical challenges of training but also complex political intrigue and unexpected allies and enemies. Among her fellow candidates is the infuriating yet irresistible Xaden Riorson, whose family's history with hers makes him both a potential ally and a dangerous enemy. Through intense training sequences, political machinations, and the formation of unbreakable bonds between riders and dragons, the novel explores themes of strength, determination, and the power of defying expectations. Yarros creates a richly detailed world where the relationship between dragons and humans is both beautiful and terrifying.",
      publishDate: "May 2, 2023",
      pages: 512,
      rating: 4.8,
      reviews: 2150,
      series: "The Empyrean Series, Book 1"
    },
    5: {
      title: "The Creative Act",
      author: "Rick Rubin",
      cover: "https://storage.googleapis.com/du-prd/books/images/9780593652886.jpg",
      genre: "Self-Help",
      description: "Legendary music producer Rick Rubin offers a profound exploration of the creative process in this groundbreaking book. Drawing from his decades of experience working with artists across various genres, Rubin shares his unique perspective on creativity as a spiritual practice rather than just a technical skill. The book is divided into thoughtful chapters that examine different aspects of the creative journey, from finding inspiration to overcoming blocks and nurturing artistic growth. Rubin challenges conventional wisdom about creativity, arguing that true artistic expression comes from a place of authenticity and openness rather than forced technique. Through personal anecdotes, philosophical insights, and practical exercises, he guides readers to understand that creativity is not about following rules but about discovering one's own path. The book offers valuable lessons for artists, musicians, writers, and anyone seeking to tap into their creative potential. Rubin's approach emphasizes the importance of mindfulness, presence, and letting go of ego in the creative process, making this book both a practical guide and a spiritual journey into the nature of creativity itself.",
      publishDate: "January 17, 2023",
      pages: 432,
      rating: 4.7,
      reviews: 1580,
      awards: "New York Times Bestseller"
    },
    6: {
      title: "Tomorrow, and Tomorrow, and Tomorrow",
      author: "Gabrielle Zevin",
      cover: "https://storage.googleapis.com/du-prd/books/images/9780593321201.jpg",
      genre: "Literary Fiction",
      description: "This extraordinary novel spans thirty years in the lives of Sam Masur and Sadie Green, two friends united by their love of video games and creative collaboration. Their story begins in a subway station where Sam recognizes Sadie, rekindling a friendship that started in a children's hospital years ago. As they pursue their dreams in the competitive world of video game development, their relationship evolves into a complex partnership that defies easy categorization. The novel masterfully explores themes of artistic creation, identity, disability, and the various forms love can take. Through the games they create together, including their breakthrough hit 'Ichigo,' Sam and Sadie process their personal traumas, celebrate their triumphs, and navigate the changing landscape of technology and human connection. Zevin's writing brilliantly captures the joy of creative collaboration, the pain of betrayal, and the ways in which virtual worlds can help us understand our reality. The story is both an intimate portrait of an extraordinary partnership and a broader examination of how technology shapes our relationships and sense of self.",
      publishDate: "July 5, 2022",
      pages: 416,
      rating: 4.5,
      reviews: 1890,
      awards: "Winner of the 2023 Women's Prize for Fiction"
    },
    7: {
      title: "Hello Beautiful",
      author: "Ann Napolitano",
      cover: "https://prodimage.images-bn.com/pimages/9780593243732_p0_v2_s1200x630.jpg",
      genre: "Contemporary Fiction",
      description: "A deeply moving homage to Louisa May Alcott's 'Little Women,' this novel tells the story of William Waters, a young man who grows up in a house shadowed by loss. When he meets the vibrant Julia Padavano in college, he discovers what it means to be truly seen and loved. Julia comes with her three sisters - the responsible Sylvie, the free-spirited Cecelia, and the nurturing Emeline - and their close-knit family becomes the home William never had. The novel explores the transformative power of love, both familial and romantic, as William becomes integrated into the Padavano family's warm embrace. However, when tragedy threatens to unravel these precious bonds, the characters must confront their deepest fears and find the courage to choose love over fear. Napolitano crafts a rich tapestry of family dynamics, examining how past trauma shapes our present choices and the healing power of unconditional love. Through beautiful prose and deeply realized characters, the novel celebrates the families we're born into and the ones we create, while acknowledging the complexity and fragility of human connections.",
      publishDate: "March 14, 2023",
      pages: 400,
      rating: 4.6,
      reviews: 1250,
      awards: "Oprah's Book Club Pick"
    },
    8: {
      title: "Demon Copperhead",
      author: "Barbara Kingsolver",
      cover: "https://storage.googleapis.com/du-prd/books/images/9780063251922.jpg",
      genre: "Literary Fiction",
      description: "A masterful modern retelling of Charles Dickens' 'David Copperfield,' set in contemporary Appalachia. The story follows Demon Copperhead, born to a single teenage mother in a single-wide trailer, fighting for survival from the moment he takes his first breath. Through Demon's unflinching first-person narrative, Kingsolver paints a vivid portrait of life in the mountains of southern Appalachia, where poverty, addiction, and systemic failures threaten the futures of countless children. As Demon navigates through foster care, child labor, school struggles, sports achievements, first love, and the growing opioid crisis, his voice remains remarkably resilient and darkly humorous. The novel provides a searing critique of America's foster care system and the opioid epidemic while celebrating the strength of community and the power of individual resilience. Kingsolver's deep understanding of the region and its people shines through in every page, creating a work that is both a gripping personal narrative and a powerful social commentary. Through Demon's journey, readers witness the devastating impact of generational poverty and addiction, but also the enduring spirit of those who refuse to be defined by their circumstances.",
      publishDate: "October 18, 2022",
      pages: 560,
      rating: 4.7,
      reviews: 1680,
      awards: "2023 Pulitzer Prize for Fiction"
    },
    9: {
      title: "Yellowface",
      author: "R.F. Kuang",
      cover: "https://storage.googleapis.com/du-prd/books/images/9780063250833.jpg",
      genre: "Thriller",
      description: "This provocative and gripping novel tackles issues of cultural appropriation, racism, and privilege in the publishing industry through a darkly satirical lens. June Hayward, a struggling white author, witnesses the accidental death of her former classmate Athena Liu, a rising star in the literary world. In a moment of opportunistic desperation, June steals Athena's just-completed manuscript about Chinese laborers in WWI. Publishing it under a pseudonym, June finds herself caught in an escalating web of lies as the book becomes a sensation. As she navigates the complex world of publishing, social media, and cultural authenticity, June must confront the consequences of her choices and the true cost of success. Kuang masterfully explores contemporary issues of identity, authenticity, and the commodification of diversity in publishing. The novel serves as both a page-turning thriller and a sharp commentary on who gets to tell whose stories, the performative nature of social justice in literary circles, and the moral compromises people make in pursuit of success. Through June's increasingly desperate attempts to maintain her facade, the book examines the intersection of ambition, ethics, and identity in modern literary culture.",
      publishDate: "May 16, 2023",
      pages: 336,
      rating: 4.3,
      reviews: 1420,
      awards: "Instant New York Times Bestseller"
    },
    10: {
      title: "Happy Place",
      author: "Emily Henry",
      cover: "https://storage.googleapis.com/du-prd/books/images/9780593441275.jpg",
      genre: "Romance",
      description: "A heartfelt exploration of love, loss, and second chances, 'Happy Place' follows Harriet and Wyn, former fiancés who broke up months ago but haven't told their best friends. Now they're forced to play happy couple for one last week at their friend group's annual vacation in Maine. The novel masterfully alternates between past and present, revealing the story of their relationship from its sweet beginning to its painful end. Through their forced proximity, Harriet and Wyn must confront the unresolved feelings and unanswered questions that led to their breakup. Henry's signature wit and emotional depth shine as she examines the complexities of long-term relationships, the weight of expectations, and the difficulty of letting go. The story delves into themes of friendship, growth, and the courage it takes to be honest about what we want from life and love. Set against the backdrop of a beautiful Maine summer, the novel explores how the places and people we love become our happy place, and whether it's possible to find your way back to that happiness after everything has changed. With rich character development and poignant observations about love and friendship, Henry creates a story that is both deeply romantic and honestly real.",
      publishDate: "April 25, 2023",
      pages: 400,
      rating: 4.4,
      reviews: 1350,
      series: "Standalone"
    }
  };

  const book = books[id];

  if (!book) {
    return (
      <div className="quick-view-container">
        <div className="error-message">
          <h2>Book not found</h2>
          <button onClick={() => navigate(-1)} className="back-button">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quick-view-container">
      <div className="quick-view-header">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back to Library
        </button>
      </div>
      
      <div className="book-details-container">
        <div className="book-image-section">
          <img src={book.cover} alt={book.title} className="book-cover" />
          <div className="book-actions">
            <button className="borrow-button">Borrow Now</button>
            <button className="wishlist-button">Add to Wishlist</button>
          </div>
        </div>

        <div className="book-info-section">
          <div className="book-header">
            <h1>{book.title}</h1>
            <p className="author">by {book.author}</p>
          </div>

          <div className="book-stats">
            <div className="stat">
              <span className="label">Rating</span>
              <span className="value">⭐ {book.rating} ({book.reviews} reviews)</span>
            </div>
            <div className="stat">
              <span className="label">Genre</span>
              <span className="value">{book.genre}</span>
            </div>
            <div className="stat">
              <span className="label">Pages</span>
              <span className="value">{book.pages}</span>
            </div>
            <div className="stat">
              <span className="label">Published</span>
              <span className="value">{book.publishDate}</span>
            </div>
          </div>

          {book.series && (
            <div className="series-info">
              <h3>Series</h3>
              <p>{book.series}</p>
            </div>
          )}

          <div className="book-description">
            <h3>Description</h3>
            <p>{book.description}</p>
          </div>

          {book.awards && (
            <div className="awards">
              <h3>Awards & Recognition</h3>
              <p>{book.awards}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickView;
