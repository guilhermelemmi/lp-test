type Props = {
  avatar: string;
  favorite: boolean;
  onFavorite: (favorite: boolean) => void;
};

function User({
  avatar,
  favorite,
  onFavorite,
}: // username,
// name,
// location,
// link,
// bio,
// lastUpdatedAt,
Props) {
  console.log('avatar url', avatar);
  return (
    <div>
      <img src={avatar} />
      <input
        type='checkbox'
        checked={favorite}
        onChange={() => onFavorite(!favorite)}
      />{' '}
      Favorite
    </div>
  );
}

export default User;
