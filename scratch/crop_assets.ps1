Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Admin\.gemini\antigravity-ide\brain\ff946b60-5c18-4209-9a74-8bda7354aad0\.user_uploaded\media_1790582361869.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Output "Image size: $($src.Width) x $($src.Height)"

# 1. Crop Left Certificate Mockup
# Bounds roughly: x=36, y=75, w=190, h=236
$certRect = New-Object System.Drawing.Rectangle(36, 75, 190, 236)
$certBmp = $src.Clone($certRect, $src.PixelFormat)
$certBmp.Save("d:\Github\NgocHanP\src\assets\cert_mockup.png", [System.Drawing.Imaging.ImageFormat]::Png)
$certBmp.Dispose()
Write-Output "Saved cert_mockup.png"

# 2. Crop Google Map Thumbnail
# Bounds roughly: x=677, y=236, w=162, h=114
$mapRect = New-Object System.Drawing.Rectangle(677, 236, 162, 114)
$mapBmp = $src.Clone($mapRect, $src.PixelFormat)
$mapBmp.Save("d:\Github\NgocHanP\src\assets\map_preview.png", [System.Drawing.Imaging.ImageFormat]::Png)
$mapBmp.Dispose()
Write-Output "Saved map_preview.png"

# 3. Crop Certificate 1: Cu Nhan
# x=398, y=53, w=122, h=78
$cnRect = New-Object System.Drawing.Rectangle(398, 53, 122, 78)
$cnBmp = $src.Clone($cnRect, $src.PixelFormat)
$cnBmp.Save("d:\Github\NgocHanP\src\assets\frame_cu_nhan.png", [System.Drawing.Imaging.ImageFormat]::Png)
$cnBmp.Dispose()
Write-Output "Saved frame_cu_nhan.png"

# 4. Crop Certificate 2: Thac Si
# x=536, y=53, w=122, h=78
$tsRect = New-Object System.Drawing.Rectangle(536, 53, 122, 78)
$tsBmp = $src.Clone($tsRect, $src.PixelFormat)
$tsBmp.Save("d:\Github\NgocHanP\src\assets\frame_thac_si.png", [System.Drawing.Imaging.ImageFormat]::Png)
$tsBmp.Dispose()
Write-Output "Saved frame_thac_si.png"

# 5. Crop Certificate 3: Dai Ly Thue
# x=674, y=53, w=122, h=78
$dltRect = New-Object System.Drawing.Rectangle(674, 53, 122, 78)
$dltBmp = $src.Clone($dltRect, $src.PixelFormat)
$dltBmp.Save("d:\Github\NgocHanP\src\assets\frame_dai_ly_thue.png", [System.Drawing.Imaging.ImageFormat]::Png)
$dltBmp.Dispose()
Write-Output "Saved frame_dai_ly_thue.png"

$src.Dispose()
Write-Output "Done cropping all assets."
