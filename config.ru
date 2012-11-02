use Rack::Static,
	:urls => ["/images", "/scripts", "/css"],
	:root => "public"

run lambda { |env|
	[
		200,
		{
			'Content-Type' => 'text/html',
			'Cache-Control' => 'public, max-age=86400'
			#'Cache-Control' => 'public'
		},
		File.open('public/index.html', File::RDONLY)
	]
}