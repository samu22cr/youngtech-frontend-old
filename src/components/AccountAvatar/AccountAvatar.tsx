"use client";
import { getInitials } from "@/lib/utils";
import StyledBadge from "./StyledBadge";
import { Typography, Avatar } from "@mui/material";

type AccountAvatarProps = {
  status?: badgeStatus;
  img?: string;
  name: string;
  imgWidth: number;
  imgHeight: number;
};

type badgeStatus = "online" | "invisible" | "doNotDisturbe";

export default function AccountAvatar({
  status,
  img,
  name,
  imgWidth,
  imgHeight,
}: AccountAvatarProps) {
  const initials: string = getInitials(name);
  return (
    <StyledBadge
      badgeContent=" "
      overlap="circular"
      variant="dot"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <Avatar alt={name} src={img} sx={{ width: imgWidth, height: imgHeight }}>
        <Typography variant="subtitle1">{initials}</Typography>
      </Avatar>
    </StyledBadge>
  );
}