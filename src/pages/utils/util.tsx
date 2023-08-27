export async function addFavoriteImage(imageId: string, userId: string) {
  const key = process.env.NEXT_PUBLIC_API_KEY;

  const rawBody = JSON.stringify({
    image_id: imageId,
    sub_id: userId,
  });

  try {
    const headers: HeadersInit = {
      "x-api-key": key || "",
      "Content-Type": "application/json",
    };

    const newFavourite = await fetch(
      "https://api.thecatapi.com/v1/favourites",
      {
        method: "POST",
        headers,
        body: rawBody as BodyInit,
      }
    );

    const responseJson = await newFavourite.json();
    return responseJson;
  } catch (error: any) {
    throw new Error(`An error occurred: ${error}`);
  }
}

export async function voteImage(imageId: string, userId: string, value: string) {
  const key = process.env.NEXT_PUBLIC_API_KEY;

  const rawBody = JSON.stringify({
    image_id: imageId,
    sub_id: userId,
    value: value,
  });

  try {
    const headers: HeadersInit = {
      "x-api-key": key || "",
      "Content-Type": "application/json",
    };

    const newFavourite = await fetch(
      "https://api.thecatapi.com/v1/votes",
      {
        method: "POST",
        headers,
        body: rawBody as BodyInit,
      }
    );

    const responseJson = await newFavourite.json();
    return responseJson;
  } catch (error: any) {
    throw new Error(`An error occurred: ${error}`);
  }
}

export async function deleteFavoriteImage(imageId: number) {
  const key = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const headers: HeadersInit = {
      "x-api-key": key || "",
      "Content-Type": "application/json",
    };

    const newFavourite = await fetch(
      `https://api.thecatapi.com/v1/favourites/${imageId}`,
      {
        method: "DELETE",
        headers,
      }
    );

    const responseJson = await newFavourite.json();
    return responseJson;
  } catch (error: any) {
    throw new Error(`An error occurred: ${error}`);
  }
}

export async function deleteVoteImage(imageId: number) {
  const key = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const headers: HeadersInit = {
      "x-api-key": key || "",
      "Content-Type": "application/json",
    };

    const newFavourite = await fetch(
      `https://api.thecatapi.com/v1/votes/${imageId}`,
      {
        method: "DELETE",
        headers,
      }
    );

    const responseJson = await newFavourite.json();
    return responseJson;
  } catch (error: any) {
    throw new Error(`An error occurred: ${error}`);
  }
}
