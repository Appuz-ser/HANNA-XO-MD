{ pkgs }: {
  deps = [
    pkgs.nodejs-18_x
    pkgs.bashInteractive
    pkgs.nodePackages.bash-language-server
    pkgs.ffmpeg
    pkgs.nodePackages.pm2
  ];
}
