interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: string;
  profile_photo_url: string;
}

export async function getGoogleReviews(): Promise<Review[]> {
  try {
    // Replace with your actual Google Place ID and API key
    const placeId = 'YOUR_PLACE_ID';
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
    );
    
    const data = await response.json();
    
    if (data.result && data.result.reviews) {
      return data.result.reviews;
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return [];
  }
} 